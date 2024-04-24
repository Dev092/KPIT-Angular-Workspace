import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  service:StudentService;
  students:any[]=[];
  constructor(s:StudentService){
    this.service=s;
    this.students=this.service.getallstudents();
  }

  getBackgroundColor(){
    if(Math.random()>0.5){
      return "teal"
    }else{
      return "gold"
    }
  }

}
