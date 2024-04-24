import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-student-app';
  students:any[]=[
    {studentId:101,studentName:'Raj',studentScore:75},
    {studentId:103,studentName:'Ram',studentScore:95},
    {studentId:104,studentName:'Sayam',studentScore:65},
    {studentId:105,studentName:'Dev',studentScore:86}
  ];
  addStudent(student:any){
    this.students.push(student);
  }
}
