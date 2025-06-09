package com.InternetBanking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.InternetBanking.Entity.Bank;
import com.InternetBanking.Service.BankService;

@RestController
@RequestMapping("/bank")
public class BankController {

    @Autowired
    private BankService bankService;

    @PostMapping
    public ResponseEntity<Bank> createBank(@RequestBody Bank bank) {
        return ResponseEntity.ok(bankService.createBank(bank));
    }

    @GetMapping
    public ResponseEntity<List<Bank>> getAllBanks() {
        return ResponseEntity.ok(bankService.getAllBanks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bank> getBankById(@PathVariable Integer id) {
        return ResponseEntity.ok(bankService.getBankById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bank> updateBank(@PathVariable Integer id, @RequestBody Bank bankDetails) {
        return ResponseEntity.ok(bankService.updateBank(id, bankDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBank(@PathVariable Integer id) {
        bankService.deleteBank(id);
        return ResponseEntity.noContent().build();
    }
}
