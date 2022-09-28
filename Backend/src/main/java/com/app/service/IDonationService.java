package com.app.service;

import java.util.List;

import com.app.dto.DonationDTO;
import com.app.entities.Donation;

public interface IDonationService {
	
	//get all doners
	List<Donation> getAllDoners();
	
	//save doner details
	DonationDTO saveDoner(DonationDTO donationDto);

}
