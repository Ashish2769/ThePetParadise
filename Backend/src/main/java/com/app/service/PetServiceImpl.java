package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Custom_Exception.ResourceNotFoundException;
import com.app.dto.PetDTO;
import com.app.entities.Pet;
import com.app.entities.PetBreed;
import com.app.entities.PetCategory;
import com.app.entities.UserEntity;
import com.app.repositories.PetBreedRepository;
import com.app.repositories.PetCategoryRepository;
import com.app.repositories.PetRepository;
import com.app.repositories.UserRepository;

@Service
@Transactional
public class PetServiceImpl implements IPetService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PetRepository petRepo;

	@Autowired
	private PetCategoryRepository petCategoryRepo;

	@Autowired
	private PetBreedRepository petBreedRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public List<Pet> getAllPetDetails() {

		return petRepo.findAll();
	}

	@Override
	public PetDTO savePet(PetDTO petdto, Long userid, Long pcid, Long breedid) {

		PetCategory petCategory = this.petCategoryRepo.findById(pcid)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid pet category Id"));

		PetBreed petBreed = this.petBreedRepo.findById(breedid)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid breed Id"));
		
		UserEntity user = this.userRepo.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User Id"));
		
		Pet pet = mapper.map(petdto, Pet.class);

		pet.setPetcategory(petCategory);
		pet.setPetBreed(petBreed);
		pet.setUser(user);

		Pet persistentPet = petRepo.save(pet);

		return mapper.map(persistentPet, PetDTO.class);

	}

	@Override
	public String deletePetDetails(Long id) {

		String mesg = "Deletion of pet details failed!!!";
		if (petRepo.existsById(id)) {
			petRepo.deleteById(id);
			mesg = "Pet deleted successfully whose ID is :" + id;
		}
		return mesg;
	}

	@Override
	public Optional<Pet> getPetDetails(Long id) {
		
		Optional<Pet> pet = petRepo.findById(id);
		return pet;
	}

	@Override
	public PetDTO updatePetDetails(PetDTO petdto, Long id) {
		
		Pet pet = this.petRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Pet id"));
		
		pet.setName(petdto.getName());
		pet.setAge(petdto.getAge());
		pet.setGender(petdto.getGender());
		pet.setLocation(petdto.getLocation());
		pet.setOwned(petdto.getOwned());
		pet.setVaccination(petdto.getVaccination());
		
		return this.mapper.map(this.petRepo.save(pet), PetDTO.class);
		
	}

	@Override
	public List<Pet> getNonAdoptedPets() {
		return petRepo.getNotAdoptedPets();
	}

	@Override
	public List<Pet> getMyPets(Long userid) {
		
		//Long userid= petRepo.findById()
		return petRepo.getMyPets(userid);
	}



}
