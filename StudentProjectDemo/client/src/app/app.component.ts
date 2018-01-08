import { Response } from '@angular/http';
import { StudentService } from './services/student.service';
import Student from './models/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    //Private studentservice will be injected into the component by Angular Dependency Injector
    private studentService: StudentService
  ) { }

  //Declaring the new student Object and initilizing it
  public newStudent: Student = new Student();

  //An Empty list for the visible student list
  studentsList: Student[];


  ngOnInit(): void {

    //At component initialization the
    this.studentService.getStudents()
      .subscribe(students => {
        //assign the studentlist property to the proper http response
        this.studentsList = students;
        console.log(students);
      })
  }
}
