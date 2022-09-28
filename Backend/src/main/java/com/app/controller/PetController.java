package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Pet;
import com.app.repositories.PetRepository;
import com.app.service.IPetService;

@RestController
@RequestMapping("/petparadise")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class PetController {

	@Autowired
	private IPetService petService;
	
	@Autowired
	private PetRepository petRepo;
	

	@GetMapping("/showpet/{id}")
	// @PathVariable => a binding between a path var to method arg.
	public ResponseEntity<?> getPetDetails(@PathVariable Long id) {
		System.out.println("in get pet " + id);
		//Optional<Pet> pet = petService.getPetDetails(id);
		Optional<Pet> pet = petService.getPetDetails(id);
		System.out.println("pet class " + pet.getClass());
		return ResponseEntity.ok(pet);
	}

	@GetMapping("/availablepets")
	public ResponseEntity<?> getNonAdoptedPetsList() {
		List<Pet> list = petService.getNonAdoptedPets();
		if (list.isEmpty())
			return new ResponseEntity<>("No pet is available to adopt !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
			


}
