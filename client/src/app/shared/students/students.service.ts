import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public API = '//localhost:8080';
  public Student_API = this.API + '/students';


  constructor(private http: HttpClient) { }


  getAll():Observable<any>{
    return this.http.get(`${this.Student_API}`);
 
  }
  getDetails(id: number) :Observable<any> {
    return this.http.get(`${this.Student_API}/${id}`);
  }

  saveStudent(students: Object): Observable<any> {
    return this.http.post(`${this.Student_API}`, students);
  }

  removeStudent(id: number) : Observable<any>{
    return this.http.delete(`${this.Student_API}/${id}`, { responseType: 'text' });
  }

  updateStudent(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.Student_API}/${id}`, value);
  }
}



