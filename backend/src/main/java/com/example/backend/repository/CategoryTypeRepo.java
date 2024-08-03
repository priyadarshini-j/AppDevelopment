package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.CategoryType;


public interface CategoryTypeRepo extends JpaRepository<CategoryType, Integer> {
}