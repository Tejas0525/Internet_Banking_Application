package com.InternetBanking.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.InternetBanking.Entity.Branch;
import com.InternetBanking.Repository.BranchRepository;

@Service
public class BranchService {

	@Autowired
	private BranchRepository branchRepository;

	public Branch createBranch(Branch branch) {
		return branchRepository.save(branch);
	}

	public Branch getBranchById(Integer branchId) {
		return branchRepository.findById(branchId).orElse(null);
	}

	public List<Branch> getAllBranches() {
		return branchRepository.findAll();
	}
	
	public Branch updateBranch(Integer branchId, Branch branchDetails) {
		Optional<Branch> optionalBranch = branchRepository.findById(branchId);
		if (optionalBranch.isPresent()) {
			Branch branch = optionalBranch.get();
			branch.setIfscCode(branchDetails.getIfscCode());
			branch.setBranchCity(branchDetails.getBranchCity());
			return branchRepository.save(branch);
		} else {
			return null;
		}
	}

	public void deleteBranch(Integer branchId) {
		branchRepository.deleteById(branchId);
	}
}
