package com.InternetBanking.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.InternetBanking.Entity.Bank;
import com.InternetBanking.Repository.BankRepository;

@Service
public class BankService {

    @Autowired
    private BankRepository bankRepository;

    public Bank createBank(Bank bank) {
        return bankRepository.save(bank);
    }

    public List<Bank> getAllBanks() {
        return bankRepository.findAll();
    }

    public Bank getBankById(Integer id) {
        Optional<Bank> bank = bankRepository.findById(id);
        return bank.orElseThrow(() -> new RuntimeException("Bank not found with ID: " + id));
    }

    public Bank updateBank(Integer id, Bank bankDetails) {
        Bank bank = getBankById(id); // Retrieves the existing bank or throws an exception

        bank.setBankName(bankDetails.getBankName());

        return bankRepository.save(bank);
    }

    public void deleteBank(Integer id) {
        Bank bank = getBankById(id);
        bankRepository.delete(bank);
    }
}
