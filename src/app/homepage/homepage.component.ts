import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username:any;
  nof:any;
  tsp:any;
  result:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  submit(login: any){

    console.log("Form Submitted !", login)
    console.log(this.username + " " + this.nof + " " + this.tsp)
    if (this.nof>0 && this.nof<50) {
      this.result="18"
    } else {
      if (this.nof>50 && this.nof<100) {
        this.result="28"
      } else {
        if (this.nof>100 && this.nof<150) {
          this.result="55"
        } else {
          if (this.nof>150 && this.nof<200) {
            this.result="76"
          } else {
            if (this.nof>200 && this.nof<250) {
              this.result="118"
            } else {
              if (this.nof>250 && this.nof<300) {
                this.result="138"
              } else {
                this.result="150 + "
              }
            }
          }
        }
      }
      
    }
    console.log(this.result)
  }

}
