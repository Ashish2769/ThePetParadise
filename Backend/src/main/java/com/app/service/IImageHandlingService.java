package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.entities.Pet;



public interface IImageHandlingService {

	Pet uploadContents(long petId, MultipartFile imageFile) throws IOException;

	byte[] restoreContents(long petId) throws IOException;

}
