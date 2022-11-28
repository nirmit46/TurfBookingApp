package com.example.booking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.booking.model.ReviewModel;
@Repository
public interface ReviewRepo extends MongoRepository<ReviewModel, String> {

}
