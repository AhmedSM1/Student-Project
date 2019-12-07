import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StudentsService} from '../shared/students/students.service';
import { Students } from '../students';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  students: Students;
  id: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService,
    private location:Location
  ) { }


  ngOnInit() {
    //get the student 
    this.students = new Students();
    this.id = this.route.snapshot.params['studentsID'];
    
    this.studentsService.getDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.students = data;
      }, error => console.log(error));
  }

  onSubmit(){
    this.updateStudents();
  }
 
  updateStudents() {
    this.studentsService.updateStudent(this.id, this.students)
      .subscribe(data => console.log(data), error => console.log(error));
    this.students = new Students();
    this.gotoList();
  }

   gotoList(){
     //navigate back to  list
     this.location.back();
   }
 
   
}
