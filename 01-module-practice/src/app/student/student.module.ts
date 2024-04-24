import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListStudentComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListStudentComponent, AddStudentComponent]
})
export class StudentModule { }
