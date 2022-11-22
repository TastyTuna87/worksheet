package com.firstproject.worksheet.service;

import com.firstproject.worksheet.model.Worksheet;

import java.util.List;


public interface WorksheetService {
    public Worksheet saveWorksheet(Worksheet worksheet);
    public List<Worksheet> getAllWorksheet();
}
