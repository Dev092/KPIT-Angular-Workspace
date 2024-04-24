import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AddEmployeeComponent, ListEmployeeComponent],
  providers:[EmployeeService]
})
export class EmployeeModule { }
