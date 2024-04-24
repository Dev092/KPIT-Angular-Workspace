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
    employeeName:''
  };
constructor(s:EmployeeService){
  this.service=s;

}

addHandler(){
  let obj={employeeId:'',employeeName:''};
  obj.employeeId=this.employee.employeeId;
  obj.employeeName=this.employee.employeeName;
  this.service.addemployee(obj);
  this.employee={};
}


}
