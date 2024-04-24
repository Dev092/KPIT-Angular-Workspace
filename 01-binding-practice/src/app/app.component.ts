import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles:`
  .d1{
    padding:10px;
    border: 1px red solid;
    height:90px;
    weidth: 1000px
  }
  `
})
export class AppComponent {
  title = '01-binding-practice';


  imagesource:string= "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
 
  changephoto(inputvalue:string){
    this.imagesource=inputvalue;
  }

}
