package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.AddWish;
import com.example.backend.repository.AddWishRepo;

import java.util.List;

@Service
public class AddWishService {
    @Autowired
    AddWishRepo addWishRepo;

    public AddWish create(AddWish addWish) {
        return addWishRepo.save(addWish);
    }

    public List<AddWish> getAll() {
        return addWishRepo.findAll();
    }

    public AddWish getId(int cid) {
        return addWishRepo.findById(cid).orElse(null);
    }

    public boolean update(int cid, AddWish addWish) {
        if (this.getId(cid) == null) {
            return false;
        }
        try {
            addWishRepo.save(addWish);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int cid) {
        if (this.getId(cid) == null) {
            return false;
        }
        addWishRepo.deleteById(cid);
        return true;
    }
}