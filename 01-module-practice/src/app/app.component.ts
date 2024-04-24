import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-module-practice';
  students:any[]=[
    {studentName:'Raj',studentAddress:'Gopalganj'},
    {studentName:'Dev',studentAddress:'Samastipur'}

  ];
  addstudent(student:any){
    this.students.push(student);
  }
}
