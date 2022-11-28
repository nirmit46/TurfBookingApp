package com.example.booking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Admin")
public class AdminModel {
	@Id
	private String username;
	private String email;
	private String password;
}
