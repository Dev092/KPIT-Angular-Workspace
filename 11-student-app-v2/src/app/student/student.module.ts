import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './delete-student/delete-student.component';



@NgModule({
  declarations: [
    ListStudentComponent,
    AddStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListStudentComponent,AddStudentComponent,DeleteStudentComponent],
  providers:[StudentService]
})
export class StudentModule { }
