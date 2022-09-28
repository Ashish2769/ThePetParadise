package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Donation;
import com.app.entities.Pet;
import com.app.entities.UserEntity;
import com.app.service.IDonationService;
import com.app.service.IPetService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/petparadise/admin")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class AdminController {

	@Autowired
	private IUserService userService;
	
	@Autowired
	private IPetService petService;
	
	@Autowired
	private IDonationService donationService;

	public AdminController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@GetMapping("/adopters")
	public ResponseEntity<?> listAllAdopters() {
		System.out.println("in list adopters");
		List<UserEntity> list = userService.getAdopterList();
	
		if (list.isEmpty())
			return new ResponseEntity<>("Empty adopters List !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/fosters")
	public ResponseEntity<?> listAllFosters() {
		System.out.println("in list fosters");
		List<UserEntity> list = userService.getFosterList();
	
		if (list.isEmpty())
			return new ResponseEntity<>("Empty fosters List !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/donors")
	public ResponseEntity<?> listAllDonors() {
		System.out.println("in list donors");
		List<Donation> list = donationService.getAllDoners();
	
		if (list.isEmpty())
			return new ResponseEntity<>("Empty donors List !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/volunteers")
	public ResponseEntity<?> listAllVolunteers() {
		System.out.println("in list vounteers");
		List<UserEntity> list = userService.getVolunteerList();
	
		if (list.isEmpty())
			return new ResponseEntity<>("Empty vounteers List !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	
	@GetMapping("/allpets")
	public ResponseEntity<?> listAllPets() {
		System.out.println("in list pets");
		List<Pet> list = petService.getAllPetDetails();
		// o.s.ResponseEntity(T body,HttpStatus sts)
		if (list.isEmpty())
			return new ResponseEntity<>("Empty User List !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

}
