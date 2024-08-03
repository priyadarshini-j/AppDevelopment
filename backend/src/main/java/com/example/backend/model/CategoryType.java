package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CategoryType {
    @Id
    private int cid;
    private String addWish;
    public CategoryType() {
    }
    public CategoryType(int cid, String addWish) {
        this.cid = cid;
        this.addWish = addWish;
    }
    public int getCid() {
        return cid;
    }
    public void setCid(int cid) {
        this.cid = cid;
    }
    public String getAddWish() {
        return addWish;
    }
    public void setAddWish(String addWish) {
        this.addWish = addWish;
    }
    

    
}