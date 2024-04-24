import { Component, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  styles:`
  .box1{
    padding: 10px;
      background-color: yellow;
      radius:20px;
  }
  `
})
export class AddStudentComponent {
  service:StudentService;
  student:any={
    studentId: '',
    studentName: '',
    studentScore: ''
  }

  constructor(service:StudentService){
   this.service=service;
  }



  addHandler(){
    let obj={studentId:'',studentName:'',studentScore:''};
    obj.studentId=this.student.studentId;
    obj.studentName=this.student.studentName;
    obj.studentScore=this.student.studentScore;
    this.service.addstudent(obj);
    this.student={};
    
  }


}






