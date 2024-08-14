package com.example.backend.service;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepository;

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getById(int productId) {
        return productRepository.findById(productId).orElse(null);
    }

    public boolean update(int productId, Product product) {
        if (productRepository.existsById(productId)) {
            product.setProductId(productId);
            productRepository.save(product);
            return true;
        }
        return false;
    }
    

    public boolean delete(int productId) {
        if (productRepository.existsById(productId)) {
            productRepository.deleteById(productId);
            return true;
        }
        return false;
    }

    // Optional method to get products by image URL if needed
    public List<Product> getByImageUrl(String imageUrl) {
        return productRepository.findByImageUrl(imageUrl);
    }
    //
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
}