package com.example.booking.controller;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.util.StringBuilderFormattable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.booking.model.UserModel;
import com.example.booking.model.AdminModel;
import com.example.booking.model.ContactModel;
import com.example.booking.model.ReviewModel;
import com.example.booking.model.TurfModel;
import com.example.booking.repository.AdminRepo;
import com.example.booking.repository.ContactRepo;
import com.example.booking.repository.ReviewRepo;
import com.example.booking.repository.Turfrepo;
import com.example.booking.repository.UserRepo;

@RestController
public class Turfcontroller {
	@Autowired
	private Turfrepo repo;
	@Autowired
	private UserRepo uRepo;
	@Autowired
	private ReviewRepo rRepo;
	@Autowired
	private ContactRepo cRepo;
	@Autowired
	private AdminRepo aRepo;
	@PostMapping("/addbooking")
	public String booknow(@RequestBody TurfModel tModel) {
		repo.save(tModel);
		return "Booked Successfully";
	}
	
	@GetMapping("/booking/{date}/{time}")
	public Optional<TurfModel> getbooking(@PathVariable String date,@PathVariable String time) {
		return repo.findAll().stream().filter(ab->ab.getDate().equals(date)).filter(ac->ac.getTime().equals(time)).findFirst();
	}

	
	@PostMapping("/signup")
	public String signup(@RequestBody UserModel user) {
		if(!uRepo.existsById(user.getUsername())) {
			uRepo.save(user);
			return "User Created";
			}
			else {
			return "Username already taken";
		}
	}
	
	@GetMapping("/login/{username}")
	public UserModel login(@PathVariable String username) {
		if(uRepo.existsById(username)) {
			return uRepo.findById(username).get();
		}
			else {
				return null;
			}
	}

	@PutMapping("/forgotpass/{username}/{email}/{password}")
	public String forgotpass(@PathVariable String username,@PathVariable String email,@PathVariable String password) {
		if(uRepo.existsById(username)) {
			if(uRepo.findById(username).get().getEmail().equals(email)) {
				UserModel m= uRepo.findById(username).get();
				m.setPassword(password);
				uRepo.save(m);
				return "Password Updated Successfully";
			}
			else {
				return "Email does not match with the username";
			}
		}
		else {
			return "Account not found";
		}
	}
	
	@GetMapping("viewbookings/{username}")
	public List<TurfModel> viewbooking(@PathVariable String username){
		 return repo.findAll().stream().filter(ab->ab.getUsername().equals(username)).toList();
	}

	@PostMapping("/addreview")
	public String addreview(@RequestBody ReviewModel m) {
		rRepo.save(m);
		return "Review Published";
	}
	
	@GetMapping("/getallreviews")
	public List<ReviewModel> getallreviews(){
		return rRepo.findAll();
	}
	
	@PostMapping("/addcontact")
	public String addcontact(@RequestBody ContactModel m) {
		cRepo.save(m);
		return "Query Submitted";
	}
	
	@GetMapping("/getallquery")
	public List<ContactModel> getallqueries(){
		return cRepo.findAll();
	}
	
	@PostMapping("/addadmin")
	public String addadmin(@RequestBody AdminModel m) {
		if(!aRepo.existsById(m.getUsername())) {
			aRepo.save(m);
			return "Admin Created";
			}
			else {
			return "Username already taken";
		}
	}
	
	@GetMapping("/adminlogin/{username}")
	public AdminModel adminlogin(@PathVariable String username) {
		if(aRepo.existsById(username)) {
			return aRepo.findById(username).get();
		}
			else {
				return null;
			}
	}
	
	@GetMapping("/getbookingsbydate/{date}")
	public List<TurfModel> getbookingsbydate(@PathVariable String date){
		return repo.findAll().stream().filter(ab->ab.getDate().equals(date)).toList();
	}
//	@DeleteMapping("delete")
//	public String delete(@RequestBody TurfModel m) {
//		repo.delete(m);
//		return "Deleted";
//	}
}
