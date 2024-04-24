import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy{
  constructor(){
    console.log('child component object created');
  }

  ngOnInit(): void {
      console.log('child component is loaded on browser');
  }

  ngOnDestroy(): void {
      console.log('your child component is deleted!');
  }

}
