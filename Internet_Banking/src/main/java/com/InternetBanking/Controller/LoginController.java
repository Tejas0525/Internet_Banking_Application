package com.InternetBanking.Controller;

import com.InternetBanking.Security.JwtUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/auth/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String username = authentication.getName();
        String role = authentication.getAuthorities().iterator().next().getAuthority();

        String token = jwtUtil.generateToken(username, role);

        return ResponseEntity.ok(new AuthResponse(token, role));
    }

    // Inner class: AuthRequest
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AuthRequest {
        private String username;
        private String password;
    }

    // Inner class: AuthResponse
    @Data
    @AllArgsConstructor
    public static class AuthResponse {
        private String token;
        private String role;
    }
}
