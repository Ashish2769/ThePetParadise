package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.PetCategory;

public interface PetCategoryRepository extends JpaRepository<PetCategory, Long>{

}
