import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-angular-eventemiter';

  employees:any[]=[
    {employeeId:1,employeeName:'Dev'},
    {employeeId:2,employeeName:'Divya'},
    {employeeId:3,employeeName:'Raj'}
  ];

  addemployee(employee:any){
    this.employees.push(employee);

  }
}
