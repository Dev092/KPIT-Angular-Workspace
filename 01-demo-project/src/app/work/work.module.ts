import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { AddworkComponent } from './addwork/addwork.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodolistComponent,
    AddworkComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TodolistComponent, AddworkComponent]
})
export class WorkModule { }
