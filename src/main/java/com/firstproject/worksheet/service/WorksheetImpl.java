package com.firstproject.worksheet.service;

import com.firstproject.worksheet.model.Worksheet;
import com.firstproject.worksheet.repository.WorksheetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorksheetImpl implements WorksheetService{
    @Autowired
    private WorksheetRepository worksheetRepository;

    @Override
    public Worksheet saveWorksheet(Worksheet worksheet) {
        return worksheetRepository.save(worksheet);
    }

    @Override
    public List<Worksheet> getAllWorksheet() {
        return worksheetRepository.findAll();
    }
}
