package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User getId(int uid) {
        return userRepository.findById(uid).orElse(null);
    }

    public boolean update(int uid, User user) {
        if (this.getId(uid) == null) {
            return false;
        }
        try {
            userRepository.save(user);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int uid) {
        if (this.getId(uid) == null) {
            return false;
        }
        userRepository.deleteById(uid);
        return true;
    }
}