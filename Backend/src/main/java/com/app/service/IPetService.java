package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.PetDTO;
import com.app.entities.Pet;

public interface IPetService {
	
	//get all pets
	List<Pet> getAllPetDetails();
	
	//save new pet
	PetDTO savePet(PetDTO petdto, Long pcid, Long breedid, Long userid);
	
	//delete pet by id
	String deletePetDetails(Long id);
	
	//get pet details by id
	Optional<Pet> getPetDetails(Long id);
	//Pet getPetDetails(Long id);
	
	//update existing pet details
	PetDTO updatePetDetails(PetDTO pet, Long id);
	
	//get adopted pets
	List<Pet> getNonAdoptedPets();
	
	//get my pets
	List<Pet> getMyPets(Long userid);

	//List<Pet> getMyPets(Iterable<Long> userid);

}
