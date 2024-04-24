import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrl: './addwork.component.css'
})
export class AddworkComponent {
  work:any={
     day:'',
     work:''
}
  @Output() add=new EventEmitter();

  addHandler(){
    this.add.emit(this.work);
  }


}
