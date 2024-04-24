import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any[]=[
    {employeeId:101,employeeName:'Raj',employeeSalary:2000},
    {employeeId:102,employeeName:'Ram',employeeSalary:2900}
  ];

  getallemployees(){
    return this.employees;
  }

  addemployee(employee:any){
    this.employees.push(employee);
  }
  

  constructor() { }
}
