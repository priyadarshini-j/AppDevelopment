package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Buy {
    @Id
    private int aid;
    private String name;
    private String mobile;
    private String pincode;
    private String address;
    private String city;
    private String state;

    public Buy() {
    }

    public Buy(int aid, String name, String mobile, String pincode, String address, String city, String state) {
        this.aid = aid;
        this.name = name;
        this.mobile = mobile;
        this.pincode = pincode;
        this.address = address;
        this.city = city;
        this.state = state;
    }

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}