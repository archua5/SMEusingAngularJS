import { Component, OnInit } from '@angular/core';
import { UserhomepageComponent } from 'src/app/userhome/userhomepage/userhomepage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  result: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit(ls : any){

    console.log("Form Submitted !")
    console.log(this.username + " " + this.password)

    if (this.username==="user" && this.password==="user") {
      this.result="logged in";
      this.router.navigate(['/userhome']);
    } else {
      this.result="incorrect details";
    }
    console.log(this.result)
  }

}
