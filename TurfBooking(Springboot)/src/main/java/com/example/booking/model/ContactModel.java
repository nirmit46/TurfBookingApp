package com.example.booking.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Contact")
public class ContactModel {
private String name;
private String email;
private String phoneno;
private String query;
}
