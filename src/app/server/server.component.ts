import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
  allowNewServer = true;
  serverId: number = 10;
  serverStatus: string  = 'offline';
  serverCreationStatus = 'No server was created!';
  serverName ='gg';
  serverCreated = false;
  servers = ['SERVER 1',' SERVER 2'];


 constructor(){
   this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
/*    setTimeout(() => {
     this.allowNewServer = true;
   } , 2000); */
 }
 getServerStatus (){
   return this.serverStatus;
 }
 onCreateServer(){
   this.serverCreated = true;
   this.servers.push(this.serverName);
   this.serverCreationStatus = 'Server was created';
 }
 onUpdateServerName(event: any){
  this.serverName = event.target.value;
 }

 getColor(){
   return this.serverStatus ==='online' ? 'green': 'red';
 }

}
