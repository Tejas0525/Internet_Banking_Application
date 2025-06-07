/*
 * package com.InternetBanking.Security;
 * 
 * import java.util.List;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.security.core.authority.SimpleGrantedAuthority; import
 * org.springframework.security.core.userdetails.UserDetails; import
 * org.springframework.security.core.userdetails.UserDetailsService; import
 * org.springframework.security.core.userdetails.UsernameNotFoundException; import
 * org.springframework.stereotype.Service;
 * 
 * import com.InternetBanking.Entity.User; import com.InternetBanking.Repository.UserRepository;
 * 
 * @Service public class CustomUserDetailsService implements UserDetailsService {
 * 
 * @Autowired private UserRepository userRepository;
 * 
 * @Override public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { User user =
 * userRepository.findByEmail(username); // .orElseThrow(() -> new UsernameNotFoundException("User not found: " +
 * username)); if (user == null) { throw new UsernameNotFoundException("User not found: " + username); } return new
 * org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), List.of(new
 * SimpleGrantedAuthority("ROLE_" + user.getRole()))); }
 * 
 * }
 */