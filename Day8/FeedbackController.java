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

import com.example.backend.model.Feedback;
import com.example.backend.service.FeedbackService;





@RestController
public class FeedbackController {
    @Autowired
    FeedbackService fs;
    @PostMapping("/post/feedback")
    public ResponseEntity<Feedback>addelements(@RequestBody Feedback f)
    {
        Feedback fst=fs.create(f);
        return new ResponseEntity<>(fst,HttpStatus.CREATED);
    }
    @GetMapping("/get/feedback")
    public ResponseEntity<List<Feedback>> showinfo()
    {
        return new ResponseEntity<>(fs.getAll(),HttpStatus.OK);
    }
    @GetMapping("/get/feedback/{fid}")
    public ResponseEntity<Feedback> getById(@PathVariable Integer fid)
    {
        Feedback obj=fs.getId(fid);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    @PutMapping("/put/{fid}")
    public ResponseEntity<Feedback> putMethodName(@PathVariable("fid") int fid, @RequestBody Feedback f) {
        if(fs.update(fid,f) == true)
        {
            return new ResponseEntity<>(f,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{fid}")
    public ResponseEntity<Boolean> delete(@PathVariable("fid") int fid)
    {
        if(fs.delete(fid) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
   
}