package com.InternetBanking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.InternetBanking.Entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
