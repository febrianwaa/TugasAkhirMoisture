package com.moisture.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.moisture.entity.Plants;
import com.moisture.repository.PlantsRepository;
import com.moisture.utility.FileUtility;


@RestController
@RequestMapping("/plants")
public class PlantsController {
	@Autowired
	PlantsRepository plantsRepo;

	@GetMapping("/")
	public List <Plants> getAll(){
		return plantsRepo.findAll();
	}
	

	
	@DeleteMapping("/deletePlants/{id}")
	public String deletePlants (@PathVariable String id) {
	plantsRepo.deleteById(Long.parseLong(id))	;
	return "Delete Berhasil";
	}

	@PutMapping("/updatePlants/{id}")
	public String updatePlants (@PathVariable String id, @RequestBody Plants plants) {
		plants.setId(Long.parseLong(id));
		plantsRepo.save(plants);
		return "Update Berhasil";
	}
	
//-----------------------------------------------------------------------------------
	
	
	
	
	
	
	@PostMapping("/")
	public String addPlants (@RequestParam(value="file")MultipartFile images, @ModelAttribute(value="data") String dataJson) throws IOException {
		String fileName = StringUtils.cleanPath(images.getOriginalFilename());
		
		String uploadDir = "src/main/java/user-photo/";
		FileUtility.saveFile(uploadDir, fileName, images);
		Plants plants = new Gson().fromJson(dataJson, Plants.class);
		

		plants.setImage(fileName);

		plantsRepo.save(plants);
		return "insert berhasil";
	}
	
	@GetMapping(value = "/image/{nama}", produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] getImageWithMediaType(@PathVariable String nama) throws IOException {
	   final InputStream in = getClass().getResourceAsStream("/user-photo/"+nama);
	   return IOUtils.toByteArray(in);
	}
	
	
	
}
