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

  constructor(e:EmployeeService){
    this.service=e;
    this.employees=this.service.getallemployees();
  }


}
