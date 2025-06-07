package com.InternetBanking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetailsService;

@SpringBootApplication
public class InternetBanking {

	public static void main(String[] args) {
		SpringApplication.run(InternetBanking.class, args);
	}
	
//	@Bean
//	public UserDetailsService userDetailsService() {
//	    return super.userDetailsService();
//	}

}
