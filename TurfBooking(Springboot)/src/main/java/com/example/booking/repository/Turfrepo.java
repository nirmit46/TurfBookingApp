package com.example.booking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.booking.model.TurfModel;
@Repository
public interface Turfrepo extends MongoRepository<TurfModel, String> {

}
