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

import com.moisture.entity.PlantsDetails;
import com.moisture.repository.PlantsDetailRepository;

@RestController
@RequestMapping("/detail")
public class PlantsDetailController {

	
	@Autowired
	PlantsDetailRepository detailRepo;
	
	@PostMapping("/")
	private String addDetail(@RequestBody PlantsDetails detail) {
		detailRepo.save(detail);
		return "Insert Berhasil";
	}
	
	@GetMapping("/")
	private List<PlantsDetails> getDetail(){
		return detailRepo.findAll();
		
	}
}
