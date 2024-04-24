import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup=new FormGroup({});
  ngOnInit(): void {
      this.loginForm=new FormGroup({
        userId:new FormControl(null,Validators.required),
        password:new FormControl(null, Validators.required)
      });
  }
  message:string="Enter the Id and Password";
  res:boolean=true;
  onSubmit(){
    alert(JSON.stringify(this.loginForm.value)); 
    console.log(`value=${JSON.stringify(this.loginForm.value)}`);
    if(this.loginForm.value.userId!=="KPIT" || this.loginForm.value.password!=="admin")
    {
      this.message="Enter valid userId or password";
      this.res = true;
    } else {
      this.message="Sucessful login";
      this.res = false;
    }
  }
  getcolor(){
    if(this.res)
    {
      return "red";
    } else {
      return "green";
    }

  }

}
