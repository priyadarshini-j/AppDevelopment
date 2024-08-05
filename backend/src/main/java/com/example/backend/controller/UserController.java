package com.example.backend.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.lang.NonNull;
import com.example.backend.dto.UpdateRequest;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService ev;
    @PostMapping("/createUser")
    public ResponseEntity<User>addelements(@RequestBody User m)
    {
        User evt=ev.createUser(m);
        return new ResponseEntity<>(evt,HttpStatus.CREATED);
    }
    @GetMapping("readUser/{email}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        Optional<User> user = ev.getUserByEmail(email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/readUsers")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<User>> showinfo()
    {
        return new ResponseEntity<>(ev.getAll(),HttpStatus.OK);
    }
    @GetMapping("/get/user/{uid}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<User> getById(@PathVariable Integer uid)
    {
        User obj=ev.getId(uid);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    @PutMapping("/put/{uid}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<User> putMethodName(@PathVariable("uid") int uid, @RequestBody User e) {
        if(ev.update(uid,e) == true)
        {
            return new ResponseEntity<>(e,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    @PutMapping("updateUser/{email}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<User> updateUser(@NonNull @PathVariable String email,
            @RequestBody UpdateRequest updateRequest) {
        User updated = ev.updateUser(email, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{uid}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Boolean> delete(@PathVariable("uid") int uid)
    {
        if(ev.delete(uid) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
   
}