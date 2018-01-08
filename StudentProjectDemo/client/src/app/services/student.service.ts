import Student from '../models/student.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  api_url = 'http://localhost:4061';
  studentUrl = `${this.api_url}/student`;

  constructor(
    private http: HttpClient
  ) { }


  //Create Student, takes a Student Object
  createStudent(student: Student): Observable<any>{
    //returns the observable of http post request
    return this.http.post(`${this.studentUrl}`, student);
  }

  //Read Student, takes no arguments
  getStudents(): Observable<Student[]>{
    console.log(this.studentUrl);
    return this.http.get(this.studentUrl,{observe:'body', responseType:'json' })
    .map(res  => {
      //Maps the response object sent from the server
      return res as Student[];
    });
  }
  //Update student, takes a Student Object as parameter
  editStudent(student:Student){
    let editUrl = `${this.studentUrl}`
    //returns the observable of http put request
    return this.http.put(editUrl, student);
  }

  deleteStudent(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.studentUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
