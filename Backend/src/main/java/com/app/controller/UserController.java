package com.app.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.entities.UserEntity;
import com.app.service.IImageHandlingService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/petparadise/user")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class UserController {

	@Autowired
	private IUserService userService;
	
	@Autowired
	private IImageHandlingService imageService;

	public UserController() {
		System.out.println("in ctor of " + getClass());
	}

	@GetMapping
	public ResponseEntity<?> listAllUsers() {
		System.out.println("in list emps");
		List<UserEntity> list = userService.getAllUserDetails();
		// o.s.ResponseEntity(T body,HttpStatus sts)
		if (list.isEmpty())
			return new ResponseEntity<>("Empty User List !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	// add req handling method to create new user
	@PostMapping("save/category/{ucid}")
	public ResponseEntity<UserDTO> saveUserDetails(@RequestBody @Valid UserDTO user, @PathVariable Long ucid)
	// To inform SC , to un marshall(de-serialization , json/xml --> Java obj) the
	// method arg.
	{
		System.out.println("in save user " + user);// id : null

		// return ResponseEntity.ok(empService.saveEmpDetails(emp));
		return new ResponseEntity<>(this.userService.saveUserDetails(user, ucid), HttpStatus.CREATED);
	}

	// add req handling method to delete emp details
	@DeleteMapping("/{userId}") // can use ANY name for a path var.
	// @PathVariable => a binding between a path var to method arg.
	public String deleteUserDetails(
			@PathVariable @Range(min = 1, max = 100, message = "Invalid emp id!!!") Long userId) {
		System.out.println("in del emp " + userId);
		return userService.deleteUserDetails(userId);
	}

	// add a method to get specific emp dtls
	@GetMapping("/{id}")
	// @PathVariable => a binding between a path var to method arg.
	public ResponseEntity<?> getUserDetails(@PathVariable Long id) {
		System.out.println("in get user " + id);
		Optional<UserEntity> user = userService.getUserDetails(id);
		System.out.println("user class " + user.getClass());
		return ResponseEntity.ok(user);

	}

	// add a method to update existing resource
	@PutMapping("/update/{id}")
	public ResponseEntity<UserDTO> updateUserDetails(@RequestBody UserDTO userdto, @PathVariable Long id) {
		
		UserDTO updateUser = this.userService.updateUserDetails(userdto, id);
		return new ResponseEntity<UserDTO>(updateUser, HttpStatus.OK);
	}
	
	// add req handling method to serve(download) the image from server side folder --> clnt
	@GetMapping(value = "/getimage/{petId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable long petId) throws IOException {
		System.out.println("in downlaod img " + petId);
		return ResponseEntity.ok(imageService.restoreContents(petId));
	}
}
