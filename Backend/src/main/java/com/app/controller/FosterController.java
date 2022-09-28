package com.app.controller;

import java.io.IOException;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.PetDTO;
import com.app.entities.Pet;
import com.app.service.IImageHandlingService;
import com.app.service.IPetService;

@RestController
@RequestMapping("/petparadise/pet")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class FosterController {

	@Autowired
	private IPetService petService;

	@Autowired
	private IImageHandlingService imageService;

	@PostMapping("/addpet/userid/{userid}/petcategory/{pcid}/breed/{breedid}")
	public ResponseEntity<PetDTO> savePetDetails(@RequestBody @Valid PetDTO pet, @PathVariable Long userid,
			@PathVariable Long pcid, @PathVariable Long breedid)
	// To inform SC , to un marshall(de-serialization , json/xml --> Java obj) the
	// method arg.
	{
		System.out.println("in save pet " + pet);// id : null

		return new ResponseEntity<>(this.petService.savePet(pet, userid, pcid, breedid), HttpStatus.CREATED);
	}

	@DeleteMapping("/delete/{petid}") // can use ANY name for a path var.
	// @PathVariable => a binding between a path var to method arg.
	public String deletePetDetails(@PathVariable @Range(min = 1, max = 100, message = "Invalid pet id!!!") Long petid) {
		System.out.println("in del pet " + petid);
		return petService.deletePetDetails(petid);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<PetDTO> updatePetDetails(@RequestBody PetDTO petdto, @PathVariable Long id) {

		PetDTO updatedPet = this.petService.updatePetDetails(petdto, id);
		return new ResponseEntity<PetDTO>(updatedPet, HttpStatus.OK);
	}

	@PostMapping("/uploadimage/{petId}")
	public ResponseEntity<?> uploadImage(@PathVariable long petId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload image " + petId + " orig file name " + imageFile.getOriginalFilename() + " size "
				+ imageFile.getSize());
		return ResponseEntity.status(HttpStatus.CREATED).body(imageService.uploadContents(petId, imageFile));
	}


	
	
	//get my pets
	@GetMapping("/mypets/{userid}")
	public ResponseEntity<?> getMyPetsList(@PathVariable Long userid) {
		List<Pet> list = petService.getMyPets(userid);
		if (list.isEmpty())
			return new ResponseEntity<>("You have not added any pet !!!!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

}
