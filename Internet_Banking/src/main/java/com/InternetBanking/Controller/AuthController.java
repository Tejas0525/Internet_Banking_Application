//package com.InternetBanking.Controller;
//
//import com.InternetBanking.Security.JwtUtil;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/auth")
//public class AuthController {
//
//    private final AuthenticationManager authenticationManager;
//    private final JwtUtil jwtUtil;
//    private final UserDetailsService userDetailsService;
//
//    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, UserDetailsService userDetailsService) {
//        this.authenticationManager = authenticationManager;
//        this.jwtUtil = jwtUtil;
//        this.userDetailsService = userDetailsService;
//    }
//
//    @PostMapping("/login")
//    public Map<String, String> login(@RequestBody Map<String, String> request) {
//        authenticationManager.authenticate(
//            new UsernamePasswordAuthenticationToken(request.get("username"), request.get("password"))
//        );
//
//        String accessToken = jwtUtil.generateAccessToken(userDetailsService.loadUserByUsername(request.get("username")));
//        String refreshToken = jwtUtil.generateRefreshToken(userDetailsService.loadUserByUsername(request.get("username")));
//
//        return Map.of("accessToken", accessToken, "refreshToken", refreshToken);
//    }
//}
//
