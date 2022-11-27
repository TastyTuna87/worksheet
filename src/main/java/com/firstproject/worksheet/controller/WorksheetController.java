package com.firstproject.worksheet.controller;

import com.firstproject.worksheet.exception.WorksheetNotFoundException;
import com.firstproject.worksheet.model.Worksheet;
import com.firstproject.worksheet.repository.WorksheetRepository;
import com.firstproject.worksheet.service.WorksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/worksheet")
public class WorksheetController {
    @Autowired
    private WorksheetService worksheetService;
    @Autowired
    private WorksheetRepository worksheetRepository;

    @PostMapping("/add")
    Worksheet newWorksheet(@RequestBody Worksheet newWorksheet) {
        return worksheetRepository.save(newWorksheet);
    }

    @GetMapping("/getAll")
    public List<Worksheet> getAllWorksheets() {
        return worksheetService.getAllWorksheet();
    }
    @GetMapping("/worksheet/{id}")
    Worksheet getWorksheetById(@PathVariable int id) {
        return worksheetRepository.findById(id)
                .orElseThrow(() -> new WorksheetNotFoundException(id));
    }

    @PutMapping("/worksheet/{id}")
    Worksheet updateWorksheet(@RequestBody Worksheet worksheet, @PathVariable int id) {
        return worksheetRepository.findById(id)
                .map(ws -> {
                    ws.setType_name(worksheet.getType_name());
                    ws.setColor(worksheet.getColor());
                    ws.setSlice_width(worksheet.getSlice_width());
                    ws.setWidth(ws.getWidth());
                    ws.setThickness(worksheet.getThickness());
                    ws.setGem(worksheet.getGem());
                    ws.setGem_number(worksheet.getGem_number());
                    return worksheetRepository.save(ws);
                }).orElseThrow(() -> new WorksheetNotFoundException(id));
    }

    @DeleteMapping("/worksheet/{id}")
    String deleteWorksheet(@PathVariable int id) {
        if (!worksheetRepository.existsById(id)) {
            throw new WorksheetNotFoundException(id);
        }
        worksheetRepository.deleteById(id);
        return "Worksheet with  id: " + id + " deleted!";
        }

}
