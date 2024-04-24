import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student:any={
    studentId:'',
    studentName:''
  }

  @Output() add=new EventEmitter();
  addHandler(){
    this.add.emit(this.student);
  }

}
