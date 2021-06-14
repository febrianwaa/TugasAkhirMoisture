package com.moisture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.moisture.entity.User;
import com.moisture.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserRepository userRepo;

	@GetMapping("/")
	public List <User> getAll(){
		return userRepo.findAll();
	}
	
	@PostMapping("/")
	public String addUser (@RequestBody User user) {
		userRepo.save(user);
		return "Insert Berhasil";
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public String deleteUser (@PathVariable String id) {
	userRepo.deleteById(Long.parseLong(id))	;
	return "Delete Berhasil";
	}

	@PutMapping("/updateUser/{id}")
	public String updateBiodata (@PathVariable String id, @RequestBody User user) {
		user.setId(Long.parseLong(id));
		userRepo.save(user);
		return "Update Berhasil";
	}
	
//-----------------------------------------------------------------------------------
	
	
	
	@GetMapping("/login/")
	public User loginUser(@RequestParam ("username")String username,@RequestParam("password")String password) {
	return userRepo.loginUser(username, password);
	}
	
}

