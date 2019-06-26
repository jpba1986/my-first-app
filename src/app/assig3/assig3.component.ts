import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assig3',
  templateUrl: './assig3.component.html',
  //styleUrls: ['./assig3.component.css']
  styles:[`
    .displayColor{
      color: white;
      background-color : blue;
  }`]
})
export class Assig3Component implements OnInit {

  showP = false;
  logArray = [];

  constructor() { }
  ngOnInit() {
  }

  onDisplayDet(){
    let i = 1;
    this.showP = !this.showP;
    this.logArray.push(i);    
  }

  /*getPColor(){
    if (this.logArray.length >=5){
      console.log(this.logArray.length);
      return 'background-color: blue;';
    }
  }*/
}
