package com.example.backend.model;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
@Entity

public class User {
    @Id
    private int uid;
    private String email;
    private String password;
    private String roles;
    public User() {
    }

    public User(int uid, String email, String password,String roles) {
        this.uid = uid;
        this.email = email;
        this.password = password;
        this.roles=roles;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Product> product=new ArrayList<>();

    // public List<Product> getOrderdata() {
    //     return product;
    // }

    // public void setOrderdata(List<Product> product) {
    //     this.product= product;
    // }



    
    
}
