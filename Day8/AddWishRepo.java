package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.AddWish;


public interface AddWishRepo extends JpaRepository<AddWish, Integer> {
}