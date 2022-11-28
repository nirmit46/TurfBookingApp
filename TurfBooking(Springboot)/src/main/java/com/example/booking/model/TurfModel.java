package com.example.booking.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "slots")
public class TurfModel {
private String username;	
private String name;
private String date;
private String time;
private String email;
private String phoneno;
}
