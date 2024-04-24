import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-demo-project';
  works:any[]=[
    {day:1,work:"study"},
    {day:2,work:"game"}

  ];
  addwork(work:any){
    this.works.push(work);
  }
}
