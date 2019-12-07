import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../shared/students/students.service';
import { Students } from '../students';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
     students : Students = new Students();
   
    submitted = false
    

  constructor(private studentsServie : StudentsService, 
                  private router: Router) { }

  ngOnInit() {
  }

  newStudents():void{
    this.submitted = false;
    this.students = new Students()
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  save(){
    this.studentsServie.saveStudent(this.students)
    .subscribe(data => console.log(data), error => console.log(error));
    this.students = new Students();
    this.goToList;
  }
 
  goToList(){
    this.router.navigate(['students'])
  }
}
