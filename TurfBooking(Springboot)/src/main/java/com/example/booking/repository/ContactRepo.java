package com.example.booking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.booking.model.ContactModel;
@Repository
public interface ContactRepo extends MongoRepository<ContactModel, String> {

}
