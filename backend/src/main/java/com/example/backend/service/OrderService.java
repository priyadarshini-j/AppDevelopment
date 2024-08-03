package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Orders;
import com.example.backend.repository.OrderRepo;

import java.util.List;
@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;

    public Orders create(Orders order) {
        return orderRepo.save(order);
    }

    public List<Orders> getAll() {
        return orderRepo.findAll();
    }

    public Orders getId(int oid) {
        return orderRepo.findById(oid).orElse(null);
    }

    public boolean update(int oid, Orders order) {
        if (this.getId(oid) == null) {
            return false;
        }
        try {
            orderRepo.save(order);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int oid) {
        if (this.getId(oid) == null) {
            return false;
        }
        orderRepo.deleteById(oid);
        return true;
    }
}