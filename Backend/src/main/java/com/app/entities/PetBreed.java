package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="pet_breed")
@Getter
@Setter
@ToString
public class PetBreed {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long breedid;
	
	private String breedName;
	
	@OneToOne(fetch =FetchType.EAGER)
	@JoinColumn(name="pcid")
	private PetCategory petCategory;

}
