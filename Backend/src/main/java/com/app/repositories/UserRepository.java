package com.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.UserEntity;
import com.app.entities.UserCategories;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	//@Query("select u from UserEntity u join fetch u.userRoles where u.email=?1")
	//Optional<UserDTO> findByEmail(String email);
	
	//Optional<User>findByUserid(Long userid);
	
	Optional<UserEntity>findByCategory(UserCategories category);
	
	Optional<UserEntity>findByEmail(String email);
	
	@Query("select u from UserEntity u where u.category=1003")
	List<UserEntity>showAdopters();
	
	@Query("select u from UserEntity u where u.category=1002")
	List<UserEntity>showFosters();
	
	@Query("select u from UserEntity u where u.category=1004")
	List<UserEntity>showVolunteers();
}
