package com.firstproject.worksheet.repository;

import com.firstproject.worksheet.model.Worksheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorksheetRepository extends JpaRepository<Worksheet, Integer> {
}
