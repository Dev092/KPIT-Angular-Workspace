import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class StudentService {

  students:any[]=[
    {studentId:101,studentName:'Raj',studentScore:75},
    {studentId:103,studentName:'Ram',studentScore:95},
    {studentId:104,studentName:'Sayam',studentScore:65},
    {studentId:105,studentName:'Dev',studentScore:86}
  ];
  getallstudents(){
    return this.students;
  }
  
addstudent(student:any){
  this.students.push(student);

}
  constructor() { }

  DeleteStudent(s:any){
    let index=this.students.findIndex((student) => student.studentId===s.studentId);
    if(index!==-1){
      this.students.splice(index,1);
    }
  }
}
