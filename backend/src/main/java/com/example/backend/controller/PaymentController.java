package com.example.backend.controller;



import com.example.backend.model.Payment;
import com.example.backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) {
        Payment createdPayment = paymentService.create(payment);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments() {
        return new ResponseEntity<>(paymentService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{paymentId}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable("paymentId") int paymentId) {
        Payment payment = paymentService.getById(paymentId);
        if (payment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    @PutMapping("/{paymentId}")
    public ResponseEntity<Payment> updatePayment(@PathVariable("paymentId") int paymentId, @RequestBody Payment payment) {
        if (paymentService.update(paymentId, payment)) {
            return new ResponseEntity<>(payment, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{paymentId}")
    public ResponseEntity<Boolean> deletePayment(@PathVariable("paymentId") int paymentId) {
        if (paymentService.delete(paymentId)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}
