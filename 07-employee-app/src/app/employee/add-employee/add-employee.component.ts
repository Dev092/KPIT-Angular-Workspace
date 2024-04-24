import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  service:EmployeeService;
  employee:any={
    employeeId:'',
    employeeName:'',
    employeeSalary:''
  }

  constructor(service:EmployeeService){
    this.service=service;
  }

  addHandler(){
    let obj={employeeId:'',employeeName:'',employeeSalary:''};
    obj.employeeId=this.employee.employeeId;
    obj.employeeName=this.employee.employeeName;
    obj.employeeSalary=this.employee.employeeSalary;
    this.service.addemployee(obj);
    this.employee={};
  }

}
