import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'delete-student',
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  service:StudentService;
  student:any={
    studentId:'',
    studentName:'',
    studentScore:''
  }

  constructor(service:StudentService){
     this.service=service;
  }

  deleteHandle(){
    let obj={studentId:'',studentName:'',studentScore:''};
    obj.studentId=this.student.studentId;
    this.service.DeleteStudent(obj);
    this.student={};
  }

}
