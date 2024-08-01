package com.example.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Buy {
    @Id
    private int bid;
    private String address;

    public Buy() {
    }

    public Buy(int bid, String address) {
        this.bid = bid;
        this.address = address;
    }

    public int getBid() {
        return bid;
    }

    public void setBid(int bid) {
        this.bid = bid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    
}