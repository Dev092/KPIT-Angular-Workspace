import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  onsubmit(form:NgForm){
   // alert(JSON.stringify(form.value));
    

    console.log('form submited');
    console.log('values = '+JSON.stringify(form.value));
    console.log('touched = '+form.touched);
    console.log('valid = '+form.valid);
    console.log('inValid = '+form.invalid)

  }

}
