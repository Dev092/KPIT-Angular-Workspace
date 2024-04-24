import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

  studentForm: FormGroup = new FormGroup({});
  data: any = {};

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      studentId: new FormControl(null, Validators.required),
      studentName: new FormControl(null, Validators.required)
    });
  }
  student:any[]=[];
  onSubmit() {
    console.log(`value = ${JSON.stringify(this.studentForm.value)}`);
    console.log(`touched = ${this.studentForm.touched}`);
    console.log(`untouched = ${this.studentForm.untouched}`);
    console.log(`valid = ${this.studentForm.valid}`);
    console.log(`invalid = ${this.studentForm.invalid}`);
    this.data = this.studentForm.value;
    this.student.push(this.studentForm.value);
    this.studentForm.reset();
  }

  getColor(){
    if(this.studentForm.value.studentId > 5){
      return "red"
    }
    else{
      return "green"
    }
  }

}
