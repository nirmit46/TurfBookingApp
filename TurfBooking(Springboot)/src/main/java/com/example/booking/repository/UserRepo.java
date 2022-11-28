package com.example.booking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.booking.model.UserModel;

public interface UserRepo extends MongoRepository<UserModel,String>{
	
}
