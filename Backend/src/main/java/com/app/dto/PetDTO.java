package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PetDTO {

	private Long petid;

	private String name;
	
	private String location;

	private String owned="No";

	private int age;

	private String vaccination;

	private char gender;

	//private String imagePath;

	private PetCategoryDTO petcategory;

	private PetBreedDTO petBreed;

	private UserDTO user;
}
