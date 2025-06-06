package com.InternetBanking.Controller;

import com.InternetBanking.Entity.Branch;
import com.InternetBanking.Service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/branch")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @PostMapping
    public ResponseEntity<Branch> createBranch(@RequestBody Branch branch) {
        return ResponseEntity.ok(branchService.createBranch(branch));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Branch> getBranchById(@PathVariable Integer id) {
        Branch branch = branchService.getBranchById(id);
        return branch != null ? ResponseEntity.ok(branch) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<Branch>> getAllBranches() {
        return ResponseEntity.ok(branchService.getAllBranches());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Branch> updateBranch(@PathVariable Integer id, @RequestBody Branch branch) {
        Branch updatedBranch = branchService.updateBranch(id, branch);
        return updatedBranch != null ? ResponseEntity.ok(updatedBranch) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBranch(@PathVariable Integer id) {
        branchService.deleteBranch(id);
        return ResponseEntity.noContent().build();
    }
}
