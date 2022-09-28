package com.app.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Pet;

public interface PetRepository extends JpaRepository<Pet, Long> {

	// @Query("select p from PetEntity p where p.owned=0")
	// Optional<PetEntity> findByOwned(long petid);

	// Optional<Pet> findByPetid(Long petid);

	@Query("select p from Pet p where p.owned='No'")
	List<Pet> getNotAdoptedPets();
	
	@Query("select p from Pet p where p.user=(select u from UserEntity u where u.userid= ?1)")
	List<Pet> getMyPets(Long userid);
	
	//@Query("select p from Pet p where p.user = ?1")
	//List<Pet> getMyPets(Long userid);
	
	//Pet getPetByid(Long id);
}
