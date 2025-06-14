package com.InternetBanking;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.InternetBanking.Entity.Bank;
import com.InternetBanking.Entity.Branch;
import com.InternetBanking.Entity.Role;
import com.InternetBanking.Entity.User;
import com.InternetBanking.Repository.BankRepository;
import com.InternetBanking.Repository.BranchRepository;
import com.InternetBanking.Repository.UserRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DataInitializer {

	private final BankRepository bankRepository;
	private final BranchRepository branchRepository;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	 //@PostConstruct
	public void init() {

		// 1. Add banks
		Bank sbi = new Bank(null, "SBI", null);
		Bank hdfc = new Bank(null, "HDFC", null);
		List<Bank> banks = null;
		try {
			banks = bankRepository.saveAll(List.of(sbi, hdfc));
		} catch (Exception e) {
			 throw new RuntimeException("", e);
		}

		// 2. Add branches
		Branch savdaBranch = new Branch(null, "SavdaSBI", "SBIN000213", "Savda", "Modi", banks.get(0));
		Branch mumbaiBranch = new Branch(null, "MumbaiHDFC", "HDFC000111", "Mumbai", "Shah", banks.get(1));
		List<Branch> branches = null;
		try {
			branches = branchRepository.saveAll(List.of(savdaBranch, mumbaiBranch));
		} catch (Exception e) {
			throw new RuntimeException("", e);
		}

		// 3. Add users

		User demoUser = new User(1, "Bhavesh Patil", "bhavesh" + System.currentTimeMillis() + "@example.com",
				"bhaveshSBIADMIN", "9876543210", passwordEncoder.encode("test1"), Role.ADMIN, branches.get(0),
				banks.get(0), "ACC" + System.currentTimeMillis());

		User demoUser2 = new User(2, "Bhavesh Patil", "bhavesh" + System.currentTimeMillis() + "@example.com",
				"bhaveshHDFCADMIN", "9876543210", passwordEncoder.encode("test1"), Role.ADMIN, branches.get(1),
				banks.get(1), "ACC" + System.currentTimeMillis());
		try {
			userRepository.saveAll(List.of(demoUser, demoUser2));

		} catch (Exception e) {
			throw new RuntimeException("", e);
		}

	}
}
