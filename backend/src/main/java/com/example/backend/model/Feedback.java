package com.example.backend.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Feedback {
    @Id
      @GeneratedValue(strategy=GenerationType.IDENTITY)
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
   


    //   // Mapping to product
     @OneToOne
    @JsonBackReference
    @JoinColumn(name = "product_id", referencedColumnName = "productId", nullable = false)
    private Product product;

public Product getProduct() {
    return product;
}

public void setProduct(Product product) {
    this.product = product;
}
    


  

    

    



}