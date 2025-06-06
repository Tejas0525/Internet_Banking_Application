package com.InternetBanking.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InternetBanking.Entity.User;
import com.InternetBanking.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Integer id) {
		User user = userService.getUserByID(id);
		if (user == null) {
	        return ResponseEntity.notFound().build(); // 404 Not Found
	    }

		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/save")
	public ResponseEntity<User> saveUser(@RequestBody User user ) {

		return ResponseEntity.ok(userService.saveUser(user));
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<User>> getAllUser() {

		return ResponseEntity.ok(userService.getAllUser());
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetails){
		
		User existingUser = userService.getUserByID(id); 
		
	    existingUser.setName(userDetails.getName());
	    existingUser.setEmail(userDetails.getEmail());
	    existingUser.setMobileNmuber(userDetails.getMobileNmuber());
	    existingUser.setPassword(userDetails.getPassword());
	    existingUser.setRole(userDetails.getRole());
	    existingUser.setBranch(userDetails.getBranch());
	    existingUser.setAccountNumber(userDetails.getAccountNumber());

	    return ResponseEntity.ok(userService.saveUser(existingUser));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
	    userService.deleteUserById(id);
	    return ResponseEntity.ok("User deleted successfully with ID: " + id);
	}
}







