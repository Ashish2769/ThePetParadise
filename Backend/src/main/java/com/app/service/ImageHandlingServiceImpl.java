package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.Custom_Exception.ResourceNotFoundException;
import com.app.entities.Pet;
import com.app.repositories.PetRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // required only for storing / retrieving the image path form emp table
@Slf4j
public class ImageHandlingServiceImpl implements IImageHandlingService {
	
	@Autowired
	private PetRepository petRepo;;
	// add model mapper
//	@Autowired
//	private ModelMapper mapper;
	// SpEL
	@Value("${file.upload.location}")
	private String folder;

	@PostConstruct
	public void anyInit() {
		log.info("in init {} ", folder);
		// create "images" folder : if one does not exist!
		File dir = new File(folder);
		if (!dir.exists())
			log.info("dir created {} ", dir.mkdirs());
		else
			log.info("dir alrdy exists.... ");
	}

	@Override
	public Pet uploadContents(long pid, MultipartFile imageFile) throws IOException {
		// validate product id
		Pet pet = petRepo.findById(pid).orElseThrow(() -> new ResourceNotFoundException("Invalid Pet Id"));
		// emp id valid , emp : PERSISTENT
		// create the image path =folder + orig file name
		String imagePath = folder.concat(File.separator).concat(imageFile.getOriginalFilename());
		// copy the contents from multipart file --> destination path
		// java.nio.file.Files : public boolean copy(InputStream in , Path
		// dest,CopyOptions options)
		log.info("bytes copied {} ",
				Files.copy(imageFile.getInputStream(), Paths.get(imagePath), StandardCopyOption.REPLACE_EXISTING));
		// store image path in db
		pet.setImagePath(imagePath);// modifying the state of persistent entity
		return pet;
	}
	// NOTE : in case of storing image in DB : entity property byte[] --> blob
	// cloumn type in db
	// Simply emp.setImage(imageFile.getBytes());

	@Override
	public byte[] restoreContents(long pid) throws IOException{
		// get emp details from emp id;
		Pet pet = petRepo.findById(pid).orElseThrow(() -> new ResourceNotFoundException("Invalid Pet Id"));
		// => emp id valid , emp : PERSISTENT
		//chekc if image path is set
		if(pet.getImagePath() == null)
			throw new ResourceNotFoundException("Image doesn't exist");
		//=> image exists
		//for reading bin contents : Files.readAllBytes(Path arg)
		return Files.readAllBytes(Paths.get(pet.getImagePath()));
	}
	// NOTE : in case of restoring image from DB : entity property byte[] --> blob
	//simply invoke emp.getImage() ---> byte[] --> controller

}
