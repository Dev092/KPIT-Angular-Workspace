import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee:any={
    employeeId:'',
    employeeName:''
  }

  @Output() add= new EventEmitter();

  addHandler(){
    this.add.emit(this.employee);
  }

}
