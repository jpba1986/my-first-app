import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
  allowNewServer = false;
 serverId: number = 10;
 serverStatus: string  = 'offline';

 constructor(){
   setTimeout(() => {
     this.allowNewServer = true;
   } , 2000);
 }
 getServerStatus (){
   return this.serverStatus;
 }

}
