package com.app.dto;

import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

	private Long userid;

	// @NotEmpty(message = "user name must be supplied")
	private String fullname;

	// @NotBlank(message = "email must be supplied")
	@Email(message = "Invalid email format")
	private String email;

	// @NotBlank(message = "password must be supplied")
	@JsonProperty(access = Access.WRITE_ONLY) // for de-serial only
	private String password;

	// @NotBlank(message = "Contact number must be supplied")
	private Long contactno;

	private String address;

	// @NotBlank(message = "City must be supplied")
	private String city;

	// @NotBlank(message = "state must be supplied")
	private String state;

	// @NotBlank(message = "pin code must be supplied")
	private int pincode;

	private UserCategoryDTO category;

	// private Long category;

	// many-to-many , User *--->* Role
//	@NotEmpty(message = "at least 1 role should be chosen")
//	private Set<UserRole> roles = new HashSet<>();

	// @NotBlank(message = "role must be supplied")
	// @JsonProperty("ucid")
	// private UserCategories category;

}
