import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
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
