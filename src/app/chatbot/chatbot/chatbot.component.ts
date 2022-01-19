import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://app.wotnot.io/bot-preview/7FGEZzKDxEMH072251762804vEFbAda3';
  }

}
