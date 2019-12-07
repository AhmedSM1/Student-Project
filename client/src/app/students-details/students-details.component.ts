import { Component, OnInit} from '@angular/core';
import { Students } from '../Students';
import { StudentsService } from '../shared/students/students.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  id:number;
  student:  Students

  constructor(private route : ActivatedRoute, private router:Router,
    private studentService: StudentsService) { }

  ngOnInit() {
    this.student = new Students();
    this.id = this.route.snapshot.params['studentsID']; 
    this.studentService.getDetails(this.id)
    .subscribe(data =>{
      console.log(data);
      this.student = data;
    }, error => console.log(error));
  }

  

  goToList(){
    this.router.navigate(['/students'])
  }
}
