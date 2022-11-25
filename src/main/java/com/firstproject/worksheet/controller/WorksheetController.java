package com.firstproject.worksheet.controller;

import com.firstproject.worksheet.model.Worksheet;
import com.firstproject.worksheet.service.WorksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/worksheet")
@CrossOrigin("http://localhost:3000")
public class WorksheetController {
    @Autowired
    private WorksheetService worksheetService;

    @PostMapping("/add")
    public String add(@RequestBody Worksheet worksheet) {
        worksheetService.saveWorksheet(worksheet);
        return "New worksheet is added!";
    }

    @GetMapping("/getAll")
    public List<Worksheet> getAllWorksheets() {
        return worksheetService.getAllWorksheet();
    }

    @GetMapping("/login")
    public String admin() {
        return "This is Admin page!";
    }

}
