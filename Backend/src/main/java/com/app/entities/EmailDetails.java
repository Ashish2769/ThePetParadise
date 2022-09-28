package com.app.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Annotations
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailDetails {

	// Java Program to Illustrate EmailDetails Class

	// Class data members
	private String email;
	private String msgBody;
	private String subject;
	private String attachment;

}
