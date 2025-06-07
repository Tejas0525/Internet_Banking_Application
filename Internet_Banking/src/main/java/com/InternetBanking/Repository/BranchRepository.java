package com.InternetBanking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.InternetBanking.Entity.Branch;

public interface BranchRepository extends JpaRepository<Branch, Integer> {

}
