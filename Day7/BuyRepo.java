package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Buy;

public interface BuyRepo extends JpaRepository<Buy, Integer> {
}