package com.firstproject.worksheet.exception;

public class WorksheetNotFoundException extends RuntimeException{
    public WorksheetNotFoundException(int id) {
        super("Worksheet not found");
    }
}
