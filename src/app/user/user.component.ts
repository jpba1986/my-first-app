import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  userNameString = '';
  //allowResetUser = false; old form
  //userEmpty='';old form

  constructor() { }

  ngOnInit() {
  }
// old form
/*   onResetUser(){    
    this.userEmpty = ('');
    this.userNameString='';
    this.allowResetUser= false;
  } */
/*   onChangeUser(event: any){
    if (event.target.value != ''){
      this.userNameString = (event.target.value);
      this.allowResetUser= true;
    }
    else{
      this.allowResetUser= false;
    }    
  } */
}
