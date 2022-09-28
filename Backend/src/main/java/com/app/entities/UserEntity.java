package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userid;
	
	@Column(length = 60)
	private String fullname;
	
	@Column(length = 20, unique = true)
	private String email;
	
	@Column(length = 350)
	private String password;
	

	private Long contactno;
	
	@Column(length=30)
	private String address;
	
	@Column(length=20)
	private String city;
	
	@Column(length=15)
	private String state;
	
	private int pincode;
	
	// many-to-many , User *--->* Role
//	@ManyToMany
//	@JoinTable(name = "users_roles", 
//	joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
//	private Set<Role> userRoles = new HashSet<>();
	
	@OneToOne(fetch =FetchType.EAGER)
	@JoinColumn(name="ucid")
	private UserCategories category;
	
//	@OneToMany(orphanRemoval=true)
//    @JoinColumn(name="CUST_ID") // join column is in table for Order
//    public Set<Order> getOrders() {return orders;}


	
}
