import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipsandtricks',
  templateUrl: './tipsandtricks.component.html',
  styleUrls: ['./tipsandtricks.component.css']
})
export class TipsandtricksComponent implements OnInit {

  flipped: boolean = false;

  constructor() { }

  ngOnInit() {
    this.flipped = false;
  }
}
