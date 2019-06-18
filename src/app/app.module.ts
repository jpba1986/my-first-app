import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { FormsModule } from '@angular/forms';
//import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { ALERTComponent } from './alert/alert.component';
import { FreddieComponent } from './freddie/freddie.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ALERTComponent,
    FreddieComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule//,
    //FormsModule,
   // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
