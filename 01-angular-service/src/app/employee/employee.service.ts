import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:any[]=[
    {employeeId:1,employeeName:'Raj'},
    {employeeId:2,employeeName:'Dev'},
    {employeeId:3,employeeName:'Divya'},
  ];

  addemployee(employee:any){
    this.employees.push(employee);

  }

  getallemployee(){
    return this.employees;
  }

  constructor() { }
}
