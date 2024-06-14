package com.code.profiler_app.services;

import com.code.profiler_app.Repository.UserMgmntRepository;
import com.code.profiler_app.model.UserMgmnt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserMgmntRepository userMgmntRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<UserMgmnt> userMgmnt = userMgmntRepository.findByUsername(username);

        if (userMgmnt.isEmpty()) {
            throw new UsernameNotFoundException("User not found");
        }

        return User.builder()
                .username(userMgmnt.get().getUsername())
                .password(userMgmnt.get().getPassword())
                .roles(userMgmnt.get().getRole()).build();
    }
}
