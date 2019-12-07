import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../shared/students/students.service';
import { Students } from '../Students';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Array<any>
  constructor(private studentsService: StudentsService ,
    private router: Router ) { 
    console.log(studentsService)

  }

  ngOnInit() {
   this.getData();
       }

    getData(){
    this.studentsService.getAll().subscribe(data =>{
      this.students = data;
    }, error => console.log(error));

    }

    deleteStudent(id: number){
      this.studentsService.removeStudent(id)
       .subscribe(data =>{
         console.log(data);
         this.getData();
       }, error => console.log(error));
       
    }

    viewDetails(id: number){
     this.router.navigate(['details',id])
    }

    updateStudent(id: number){
      this.router.navigate(['update',id]);
    }
 
    addStudent(){
      this.router.navigate(['sign-up']);
    }


  }



