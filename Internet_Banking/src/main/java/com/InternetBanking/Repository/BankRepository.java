package com.InternetBanking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.InternetBanking.Entity.Bank;

public interface BankRepository extends JpaRepository<Bank, Integer> {

}
