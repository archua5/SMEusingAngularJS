import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ss:any;
  username:any;
  name:any;
  password:any;
  cpassword:any;

  ngOnInit(): void {
  }

  signupSubmit(ss: any)
  {
    console.log("Signup form submitted" + ss)
    if (this.password===this.cpassword) {
      console.log(this.password===this.cpassword)
      console.log("Signup Succesful")
      this.router.navigate(['/userhome'])
    } else {
      console.log("SIgnup unsuccesful")
    }
  }

}
