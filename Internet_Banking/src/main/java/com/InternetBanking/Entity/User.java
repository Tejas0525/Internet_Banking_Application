package com.InternetBanking.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "User")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	
	private String name;
	
	@Column(unique = true)
	private String email;
	
	private String mobileNmuber;
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	public enum Role {
	       CUSTOMER, MANAGER, ADMIN
	}
	
//	@ManyToOne
//    @JoinColumn(name = "branchId")
	private Integer branchId;
	
	@Column(unique = true)
	private String accountNumber;
	
	
}
