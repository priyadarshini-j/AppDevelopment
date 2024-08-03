package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.CategoryType;
import com.example.backend.repository.CategoryTypeRepo;


import java.util.List;

@Service
public class CategoryTypeService {
    @Autowired
    CategoryTypeRepo categoryTypeRepo;

    public CategoryType create(CategoryType categoryType) {
        return categoryTypeRepo.save(categoryType);
    }

    public List<CategoryType> getAll() {
        return categoryTypeRepo.findAll();
    }

    public CategoryType getId(int cid) {
        return categoryTypeRepo.findById(cid).orElse(null);
    }

    public boolean update(int cid, CategoryType categoryType) {
        if (this.getId(cid) == null) {
            return false;
        }
        try {
            categoryTypeRepo.save(categoryType);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int cid) {
        if (this.getId(cid) == null) {
            return false;
        }
        categoryTypeRepo.deleteById(cid);
        return true;
    }
}