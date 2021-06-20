package com.moisture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moisture.entity.Glosarium;
import com.moisture.repository.GlosariumRepository;

@RestController
@RequestMapping("/glosarium")
public class GlosariumController {

	
	@Autowired
	GlosariumRepository glosariumRepo;
	
	@PostMapping("/")
	private String addGlosarium(@RequestBody Glosarium glosarium) {
		glosariumRepo.save(glosarium);
		return "Insert Berhasil";
	}
	
	@GetMapping("/")
	private List<Glosarium> getAll(){
		return glosariumRepo.findAll();
		
	}
	
	
}