import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  service:EmployeeService;
  employees:any[]=[];
  constructor(s:EmployeeService){
    this.service=s;
    this.employees=this.service.getallemployee();

  }

}
