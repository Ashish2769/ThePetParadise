package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DonationDTO {

	private Long id;

	private String name;

	private String email;

	private Long contactno;

	private String address;

	private String city;

	private String state;

	//private int pincode;

	private double amount;

}
