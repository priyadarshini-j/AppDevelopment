package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AddWish {
    @Id
    private int cid;
    private String categoryType;
    public AddWish() {
    }
    public AddWish(int cid, String categoryType) {
        this.cid = cid;
        this.categoryType = categoryType;
    }
    public int getCid() {
        return cid;
    }
    public void setCid(int cid) {
        this.cid = cid;
    }
    public String getCategoryType() {
        return categoryType;
    }
    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }
    

    
}