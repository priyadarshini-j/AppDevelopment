package com.example.backend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Buy;
import com.example.backend.service.BuyService;

@RestController
@RequestMapping("/api/buy")
public class BuyController{
    @Autowired
    BuyService bs;

    @PostMapping
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Buy> addElements(@RequestBody Buy b) {
        Buy bst = bs.create(b);
        return new ResponseEntity<>(bst, HttpStatus.CREATED);
    }

    @GetMapping("/get/buy")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<List<Buy>> showInfo() {
        return new ResponseEntity<>(bs.getAll(), HttpStatus.OK);
    }

    @GetMapping("/get/buy/{aid}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Buy> getById(@PathVariable Integer aid) {
        Buy obj = bs.getId(aid);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping("/put/{aid}")
    @PreAuthorize("hasAuthority('USER') ")
    public ResponseEntity<Buy> updateBuy(@PathVariable("aid") int aid, @RequestBody Buy b) {
        if (bs.update(aid, b)) {
            return new ResponseEntity<>(b, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{aid}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Boolean> delete(@PathVariable("aid") int aid) {
        if (bs.delete(aid)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}