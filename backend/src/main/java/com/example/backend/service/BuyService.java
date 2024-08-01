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

    public Buy getId(int bid) {
        return buyRepo.findById(bid).orElse(null);
    }

    public boolean update(int bid, Buy buy) {
        if (this.getId(bid) == null) {
            return false;
        }
        try {
            buyRepo.save(buy);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int bid) {
        if (this.getId(bid) == null) {
            return false;
        }
        buyRepo.deleteById(bid);
        return true;
    }
}