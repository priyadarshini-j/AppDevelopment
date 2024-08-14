package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int paymentId;
    private String cardName;
    private String cardNumber;
    private String cardCvv;
    private String expiryDate;

   
    

    
    // @OneToOne
    // @JsonBackReference
    // @JoinColumn(name = "buy_aid", referencedColumnName = "aid", nullable = false)
    // private Buy buy;

    // public Buy getBuy() {
    //     return buy;
    // }

    // public void setBuy(Buy buy) {
    //     this.buy = buy;
    // }

    ///payment to order
    // @OneToOne(mappedBy = "payment",cascade = CascadeType.ALL, orphanRemoval = true)
    // @JsonManagedReference
    // @JsonIgnore
    // private Orders orders;

    // public Orders getOrders() {
    //     return orders;
    // }

    // public void setOrders(Orders orders) {
    //     this.orders = orders;
    // }

    
    
       



    
}