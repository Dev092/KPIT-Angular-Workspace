import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddStudentComponent,
    ListStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AddStudentComponent, ListStudentComponent]
})
export class StudentModule { }
