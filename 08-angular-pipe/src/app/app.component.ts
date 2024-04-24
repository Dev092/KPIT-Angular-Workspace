import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  companyName:string="KPIT";
  num:number=75;
  student:any={
    studentId:100,
    studentName:"Raj",
    studentScore:98
  };
  srudentNames:string[]=["Raj","Dev","Ram","Divya"];
  name="";
}
