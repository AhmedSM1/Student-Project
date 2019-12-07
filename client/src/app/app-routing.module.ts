import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {StudentsDetailsComponent} from './students-details/students-details.component';
  import { from } from 'rxjs';

const routes: Routes = [

  { path: '', redirectTo: 'students', pathMatch: 'full' },
{
  path: 'students',
  component: StudentListComponent
},
{
  path:'sign-up',
  component: AddStudentComponent
},
 {
   path:'update/:studentsID',
   component:StudentsEditComponent
 },
 {
   path:'details/:studentsID',
   component:StudentsDetailsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
