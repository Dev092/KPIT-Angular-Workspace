import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-emitter';

  students:any[]=[
    {studentId:101,studentName:'Raj'},
    {studentId:103,studentName:'Ram'},
    {studentId:104,studentName:'Sayam'},
    {studentId:105,studentName:'Dev'}
  ];
  addStudent(student:any){
    this.students.push(student);
  }
}
