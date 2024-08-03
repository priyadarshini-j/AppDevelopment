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

import com.example.backend.model.CategoryType;
import com.example.backend.service.CategoryTypeService;


@RestController
public class CategoryTypeController {
    @Autowired
    CategoryTypeService cs;
    @PostMapping("/post/categorytype")
    public ResponseEntity<CategoryType>addelements(@RequestBody CategoryType c)
    {
        CategoryType cst=cs.create(c);
        return new ResponseEntity<>(cst,HttpStatus.CREATED);
    }
    @GetMapping("/get/categorytype")
    public ResponseEntity<List<CategoryType>> showinfo()
    {
        return new ResponseEntity<>(cs.getAll(),HttpStatus.OK);
    }
    @GetMapping("/get/categorytype/{cid}")
    public ResponseEntity<CategoryType> getById(@PathVariable Integer cid)
    {
        CategoryType obj=cs.getId(cid);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    @PutMapping("/put/{cid}")
    public ResponseEntity<CategoryType> putMethodName(@PathVariable("cid") int cid, @RequestBody CategoryType c) {
        if(cs.update(cid,c) == true)
        {
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{cid}")
    public ResponseEntity<Boolean> delete(@PathVariable("cid") int cid)
    {
        if(cs.delete(cid) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
   
}