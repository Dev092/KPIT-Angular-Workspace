import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';



@NgModule({
  declarations: [
    AddStudentComponent,
    ListStudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
