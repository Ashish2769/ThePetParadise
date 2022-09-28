package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "pets")
@Getter
@Setter
@ToString
public class Pet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long petid;
	
	private String name;
	private String location;
	private String owned;
	private int age;
	private String vaccination;
	private char gender;
	
	private String imagePath;
	
	@OneToOne(fetch =FetchType.EAGER) // cascade = CascadeType.ALL)
	@JoinColumn(name="pcid")
	private PetCategory petcategory;
	
	@OneToOne(fetch =FetchType.EAGER)
	@JoinColumn(name="breedid")
	private PetBreed petBreed;
	
	@ManyToOne(fetch =FetchType.EAGER)
	@JoinColumn(name="userid")
	private UserEntity user;
	
	
	
	
}
