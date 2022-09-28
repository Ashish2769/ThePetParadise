package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DonationDTO;
import com.app.entities.Donation;
import com.app.service.IDonationService;

@RestController
@RequestMapping("/petparadise/donor")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class DonationController {

	@Autowired
	private IDonationService donationService;

	@PostMapping("/savedonor")
	public ResponseEntity<DonationDTO> saveDonorDetails(@RequestBody @Valid DonationDTO donor)
	// To inform SC , to un marshall(de-serialization , json/xml --> Java obj) the
	// method arg.
	{
		System.out.println("in save donor " + donor);// id : null

		return new ResponseEntity<>(this.donationService.saveDoner(donor), HttpStatus.CREATED);
	}

}
