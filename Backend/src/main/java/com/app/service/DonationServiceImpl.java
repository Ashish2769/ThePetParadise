package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.DonationDTO;
import com.app.entities.Donation;
import com.app.repositories.DonationRepository;


@Service
@Transactional
public class DonationServiceImpl implements IDonationService {

	@Autowired
	private DonationRepository donationRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public List<Donation> getAllDoners() {
		
		return donationRepo.findAll();
	}

	@Override
	public DonationDTO saveDoner(DonationDTO donationDto) {
		
		Donation doner = mapper.map(donationDto, Donation.class);
		
		return mapper.map(donationRepo.save(doner), DonationDTO.class);
	}

}
