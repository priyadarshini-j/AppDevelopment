package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.example.backend.dto.UpdateRequest;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import org.springframework.lang.NonNull;


@Service
public class UserService {
    @Autowired
    UserRepository userRepo;


    @Autowired
    private PasswordEncoder passwordEncoder;

    // newUser
    public User createUser(@NonNull User user) {
        // Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public User updateUser(@NonNull String email, UpdateRequest updateRequest) {
        return userRepo.findByEmail(email)
                .map(existingUser -> {
                    //existingUser.setName(updateRequest.getName());
                    existingUser.setEmail(updateRequest.getEmail());
                    existingUser.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
                    return userRepo.save(existingUser);
                })
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }


    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User getId(int uid) {
        return userRepo.findById(uid).orElse(null);
    }

    public boolean update(int uid, User user) {
        if (this.getId(uid) == null) {
            return false;
        }
        try {
            userRepo.save(user);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }
    // getUser
    public Optional<User> getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public boolean delete(int uid) {
        if (this.getId(uid) == null) {
            return false;
        }
        userRepo.deleteById(uid);
        return true;
    }
    
}
