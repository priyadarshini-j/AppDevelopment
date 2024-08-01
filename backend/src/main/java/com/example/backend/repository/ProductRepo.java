package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Product;
import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Integer> {
    // Custom query method to find products by category
    List<Product> findByCategory(String category);
}