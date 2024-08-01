package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepo;


@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepo;

    public Product create(Product product) {
        return productRepo.save(product);
    }

    public List<Product> getAll() {
        return productRepo.findAll();
    }

    public Product getById(int productId) {
        return productRepo.findById(productId).orElse(null);
    }

    public boolean update(int productId, Product product) {
        if (this.getById(productId) == null) {
            return false;
        }
        try {
            productRepo.save(product);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int productId) {
        if (this.getById(productId) == null) {
            return false;
        }
        productRepo.deleteById(productId);
        return true;
    }

    // New method to find products by category
    public List<Product> getByCategory(String category) {
        return productRepo.findByCategory(category);
    }
}