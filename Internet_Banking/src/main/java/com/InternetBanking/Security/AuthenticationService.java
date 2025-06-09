package com.InternetBanking.Security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.InternetBanking.Dto.LoginUserDto;
import com.InternetBanking.Entity.User;
import com.InternetBanking.Exceptions.UserExistsException;
import com.InternetBanking.Exceptions.UserNameExistsException;
import com.InternetBanking.Repository.UserRepository;
import java.util.Objects;

@Service
public class AuthenticationService {
	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final AuthenticationManager authenticationManager;

	public AuthenticationService(UserRepository userRepository, AuthenticationManager authenticationManager,
			PasswordEncoder passwordEncoder) {
		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public User signup(User input) {

		
		
		if (userRepository.findByUserName(input.getUsername()).isPresent()) {
			throw new  UserNameExistsException("Username already taken");
		}
		
		User existingUser = userRepository.findByEmail(input.getEmail()).orElse(null);
		
		if (existingUser !=  null && Objects.equals(existingUser.getBank().getBankId(), input.getBank().getBankId())) {
			throw new UserExistsException("User already exists");
			
		}
		input.setPassword(passwordEncoder.encode(input.getPassword()));

		return userRepository.save(input);
	}

	public User authenticate(LoginUserDto input) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(input.getUserName(), input.getPassword()));

		return userRepository.findByUserName(input.getUserName()).orElseThrow();
	}
}
