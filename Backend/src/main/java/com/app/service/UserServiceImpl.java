package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Custom_Exception.ResourceNotFoundException;
import com.app.dto.UserDTO;
import com.app.entities.UserEntity;
import com.app.entities.UserCategories;
import com.app.repositories.UserCategoriesRepository;
import com.app.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	// dep : model mapper for mapping dto --- entity
	@Autowired
	private ModelMapper mapper;

	@Autowired
	private UserCategoriesRepository userCategoryRepo;
	
	@Autowired
	private PasswordEncoder passwordecoder;

	@Override
	public List<UserEntity> getAllUserDetails() {

		return userRepo.findAll();
	}

	@Override
	public UserDTO saveUserDetails(UserDTO userdto, Long ucid) {

		UserCategories userCategory = this.userCategoryRepo.findById(ucid)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid category Id"));

//		TypeMap<User, UserDTO> propertyMapper =this.mapper.createTypeMap(User.class, UserDTO.class);
//		// add deep mapping to flatten source's Player object into a single field in destination
//	    propertyMapper.addMappings(
//	      mapper -> mapper.map(src -> src.getCategory().getUcid(), UserDTO::setCategory)
//	    );
//	    
//	 // when map between different hierarchies
//	    User user = new User();
//	    user.setCategory(new UserCategories());
//	    UserDTO userDTO = this.mapper.map(user, UserDTO.class);
//	    
//	    assertEquals(user.getCategory().getUcid(), userDTO.getCategory());

//		PropertyMap<User, UserDTO> userMap = new PropertyMap<User, UserDTO>() {
//			protected void configure() {
//				map().setCategory(source.getCategory().getUcid());
//			}
//		};
//		mapper.addMappings(userMap);

		// map DTO to entity
		UserEntity user = mapper.map(userdto, UserEntity.class);

		user.setCategory(userCategory);
		user.setPassword(passwordecoder.encode(userdto.getPassword()));

		// persist emp details in the db
		UserEntity persistentUser = userRepo.save(user);

		// map entity --> dto
		return mapper.map(persistentUser, UserDTO.class);

	}

	@Override
	public String deleteUserDetails(Long userId) {

		String mesg = "Deletion of user details failed!!!";
		if (userRepo.existsById(userId)) {
			userRepo.deleteById(userId);
			mesg = "User deleted successfully whose ID is :" + userId;
		}
		return mesg;
	}

	@Override
	public Optional<UserEntity> getUserDetails(Long userId) {

		Optional<UserEntity> user = userRepo.findById(userId); // getById(userId)
		return user;
	}

	@Override
	public UserDTO updateUserDetails(UserDTO userdto, Long id) {

		UserEntity user = this.userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id"));

		user.setAddress(userdto.getAddress());
		user.setCity(userdto.getCity());
		user.setContactno(userdto.getContactno());
		//user.setEmail(userdto.getEmail());
		user.setPassword(passwordecoder.encode(userdto.getPassword()));
		user.setPincode(userdto.getPincode());
		user.setState(userdto.getState());

		UserEntity updatatedUser = this.userRepo.save(user);
		return this.mapper.map(updatatedUser, UserDTO.class);

	}

	@Override
	public List<UserEntity> getAdopterList() {

		return userRepo.showAdopters();
	}

	@Override
	public List<UserEntity> getFosterList() {

		return userRepo.showFosters();
	}

	@Override
	public List<UserEntity> getVolunteerList() {

		return userRepo.showVolunteers();
	}

}
