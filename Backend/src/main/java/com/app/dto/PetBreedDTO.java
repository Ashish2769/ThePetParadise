package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PetBreedDTO {

	private Long breedid;

	private String breedName;

	private PetCategoryDTO petCategory;

}
