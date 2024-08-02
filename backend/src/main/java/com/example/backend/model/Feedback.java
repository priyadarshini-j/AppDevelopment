package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Feedback {
    @Id
    private int fid;
    private String rating;
    private String description;

    public Feedback() {
    }

    public Feedback(int fid, String rating,String description) {
        this.fid = fid;
        this.rating=rating;
        this.description=description;
    }

    public int getUid() {
        return fid;
    }

    public void setFid(int fid) {
        this.fid = fid;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating=rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description=description;
    }
}