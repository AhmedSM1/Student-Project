package com.example.submissionform.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Students{
    @Id 
    private int  studentsID;
    private String studentName;
    private int age;
    private Double gpa;

  

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Double getGpa() {
        return gpa;
    }

    public void setGpa(Double gpa) {
        this.gpa = gpa;
    }

    

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    @Override
    public String toString() {
        return "Students [age=" + age + ", gpa=" + gpa + ", studentName=" + studentName + ", studentsID=" + studentsID
                + "]";
    }

    public int getStudentsID() {
        return studentsID;
    }

    public void setStudentsID(int studentsID) {
        this.studentsID = studentsID;
    }




   
    
}