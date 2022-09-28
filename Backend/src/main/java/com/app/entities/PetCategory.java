package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="pet_categories")
@Getter
@Setter
@ToString
public class PetCategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long pcid;
	
	private String pcname;

}
