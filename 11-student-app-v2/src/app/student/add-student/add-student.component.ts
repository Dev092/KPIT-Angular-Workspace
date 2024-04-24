import { Component, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

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
  constructor(private service:StudentService){

  }

  addHandler(studentForm:NgForm){
    this.service.addstudent(studentForm.value);
    studentForm.resetForm();
  }
}






