package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.UserDTO;

import com.app.entities.UserEntity;

public interface IUserService {

	// get all users
	List<UserEntity> getAllUserDetails();

	// save new user details
	UserDTO saveUserDetails(UserDTO user, Long id);

	// delete specific user details
	String deleteUserDetails(Long userId);

	// get user details by specified id
	Optional<UserEntity> getUserDetails(Long userId);

	// update existing user details
	UserDTO updateUserDetails(UserDTO user, Long id);

	// get adopter list
	List<UserEntity> getAdopterList();

	// get adopter list
	List<UserEntity> getFosterList();

	// get adopter list
	List<UserEntity> getVolunteerList();

}
