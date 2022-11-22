package com.firstproject.worksheet.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Worksheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type_name;
    private String color;
    private String multi_color;
    private String slice_color;
    private double slice_width;
    private double width;
    private double thickness;
    private int gem;
    private int gem_number;

    public Worksheet() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType_name() {
        return type_name;
    }

    public void setType_name(String type_name) {
        this.type_name = type_name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMulti_color() {
        return multi_color;
    }

    public void setMulti_color(String multi_color) {
        this.multi_color = multi_color;
    }

    public String getSlice_color() {
        return slice_color;
    }

    public void setSlice_color(String slice_color) {
        this.slice_color = slice_color;
    }

    public double getSlice_width() {
        return slice_width;
    }

    public void setSlice_width(double slice_width) {
        this.slice_width = slice_width;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getThickness() {
        return thickness;
    }

    public void setThickness(double thickness) {
        this.thickness = thickness;
    }

    public int getGem() {
        return gem;
    }

    public void setGem(int gem) {
        this.gem = gem;
    }

    public int getGem_number() {
        return gem_number;
    }

    public void setGem_number(int gem_number) {
        this.gem_number = gem_number;
    }
}

