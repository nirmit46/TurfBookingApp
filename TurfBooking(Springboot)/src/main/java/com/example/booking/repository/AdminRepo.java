package com.example.booking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.booking.model.AdminModel;

@Repository
public interface AdminRepo extends MongoRepository<AdminModel, String>{

}
