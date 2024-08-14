package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Buy;
import com.example.backend.repository.BuyRepo;

import java.util.List;

@Service
public class BuyService {
    @Autowired
    BuyRepo buyRepo;

    public Buy create(Buy buy) {
        return buyRepo.save(buy);
    }

    public List<Buy> getAll() {
        return buyRepo.findAll();
    }

    public Buy getId(int aid) {
        return buyRepo.findById(aid).orElse(null);
    }

    public List<Buy> getByEmail(String email) {
        return buyRepo.findByEmail(email);
    }

    public boolean update(int aid, Buy buy) {
        if (this.getId(aid) == null) {
            return false;
        }
        try {
            buyRepo.save(buy);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int aid) {
        if (this.getId(aid) == null) {
            return false;
        }
        buyRepo.deleteById(aid);
        return true;
    }
}