import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '09-angular-lifecycle';
  flag:boolean=true;
  onclick(){
    this.flag=!this.flag;

  }
}
