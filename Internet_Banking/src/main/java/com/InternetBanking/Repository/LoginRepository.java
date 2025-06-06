package com.InternetBanking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.InternetBanking.Entity.User;

public interface LoginRepository extends JpaRepository<User, Integer> {

	
}

