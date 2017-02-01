import { Component } from '@angular/core';
import {Reminder} from "../base/reminder";
import {ReminderService} from "./services/reminder.service";

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to your ToDo list {{name}}</h1>`,
})
export class AppComponent  {
  name="Hans"

}
