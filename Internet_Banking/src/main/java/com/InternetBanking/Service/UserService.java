package com.InternetBanking.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.InternetBanking.Entity.User;
import com.InternetBanking.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User getUserByID(Integer id) {
		return userRepository.getReferenceById(id);
	}
	
	public User saveUser (User user) {
		return userRepository.save(user);
	}
	
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	public User updateUser(Integer id) {
		return userRepository.getReferenceById(id);
	}
	
	public User deleteUserById(Integer id) {
		return userRepository.getReferenceById(id);
	}

}
