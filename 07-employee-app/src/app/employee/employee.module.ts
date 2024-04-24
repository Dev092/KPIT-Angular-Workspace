import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListEmployeeComponent,AddEmployeeComponent],
  providers:[EmployeeService]
})
export class EmployeeModule { }
