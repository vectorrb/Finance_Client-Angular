import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId:number
  id:any
  constructor(){
  this.userId = 13;
  this.id = sessionStorage.setItem("userId", this.userId.toString());
  
  }
  title = 'FinanceClient';
}
