import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AddEmployeeComponent, ListEmployeeComponent]
})
export class EmployeeModule { }
