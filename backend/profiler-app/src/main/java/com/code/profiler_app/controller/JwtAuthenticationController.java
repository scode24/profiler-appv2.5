package com.code.profiler_app.controller;

import com.code.profiler_app.model.JwtRequest;
import com.code.profiler_app.services.CustomUserDetailsService;
import com.code.profiler_app.services.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/jwt")
@RestController
public class JwtAuthenticationController {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JwtHelper helper;

    @GetMapping("/test")
    public String test() {
        return "jwt-auth console...";
    }

    @PostMapping("/auth")
    public ResponseEntity<String> login(@RequestBody JwtRequest request) {
        this.doAuthenticate(request.getUsername(), request.getPassword());
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(request.getUsername());
        String token = this.helper.generateToken(userDetails);

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    private void doAuthenticate(String username, String password) {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, password);
        try {
            manager.authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Credentials Invalid !!");
        }
    }
}
