package com.example.submissionform.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.example.submissionform.StudentRepo;
import com.example.submissionform.model.Students;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudentsController{
    @Autowired
    //important always put the AutoWired annotation before decalring the interface
     StudentRepo repo;
  
//insert
@PostMapping("/students")
public Students insert(@Valid @RequestBody Students students){
  return repo.save(students);
}
  //list of students   
 @GetMapping("/students")
 public List<Students> index(){
     return repo.findAll();
 }
  //get student by ID
  @GetMapping("/students/{studentsID}")
  public ResponseEntity<Students> getStudentByID(@PathVariable(value = "studentsID") int id)
  {
       Students students = repo.findById(id).orElse(null);
       return ResponseEntity.ok().body(students);
  }

  //delete student by ID
  @DeleteMapping("/students/{studentsID}")
  public Map<String, Boolean> deleteStudentByID(@PathVariable("studentsID") int id)
    throws ResourceNotFoundException{
      //get the student object
    Students students = repo.findById(id).orElse(null);
    repo.delete(students);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
  }
  

  //update student
  @PutMapping("/students/{studentsID}")
  public ResponseEntity<Students> updateStudents(@PathVariable("studentsID") int id, 
  @Valid @RequestBody Students dataEntry)
  throws ResourceNotFoundException{
    Students student = repo.findById(id).orElse(null);

    student.setStudentName(dataEntry.getStudentName());
    student.setGpa(dataEntry.getGpa());
    student.setAge(dataEntry.getAge());
    student.setStudentsID(dataEntry.getStudentsID());

    final Students updatedStudent = repo.save(student);
    return ResponseEntity.ok(updatedStudent);
         
}

}