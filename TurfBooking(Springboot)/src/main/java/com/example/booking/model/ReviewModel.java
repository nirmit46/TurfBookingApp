package com.example.booking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
@Data
@Document(collection = "Reviews")
public class ReviewModel {
@Id
private String name;
private String email;
private String phoneno;
private String like;
private String star;
}
