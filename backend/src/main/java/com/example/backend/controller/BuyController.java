package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Buy;
import com.example.backend.service.BuyService;

@RestController
public class BuyController {
    @Autowired
    BuyService bs;
    @PostMapping("/post/buy")
    public ResponseEntity<Buy>addelements(@RequestBody Buy b)
    {
        Buy bst=bs.create(b);
        return new ResponseEntity<>(bst,HttpStatus.CREATED);
    }
    @GetMapping("/get/buy")
    public ResponseEntity<List<Buy>> showinfo()
    {
        return new ResponseEntity<>(bs.getAll(),HttpStatus.OK);
    }
    @GetMapping("/get/buy/{bid}")
    public ResponseEntity<Buy> getById(@PathVariable Integer bid)
    {
        Buy obj=bs.getId(bid);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    @PutMapping("/put/{bid}")
    public ResponseEntity<Buy> putMethodName(@PathVariable("bid") int bid, @RequestBody Buy b) {
        if(bs.update(bid,b) == true)
        {
            return new ResponseEntity<>(b,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{bid}")
    public ResponseEntity<Boolean> delete(@PathVariable("bid") int bid)
    {
        if(bs.delete(bid) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
   
}