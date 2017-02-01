import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ReminderComponent }  from './reminder.component';
import {ReminderService} from "./services/reminder.service";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      ReminderComponent
  ],
  bootstrap:    [
      AppComponent
  ],
    providers:[
        ReminderService
    ]
})
export class AppModule { }
