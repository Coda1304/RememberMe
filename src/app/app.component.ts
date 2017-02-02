import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  reminders = REMINDERS;

}

export class Reminder{
  id: number;
  detail: string;
  title: string;
}

const REMINDERS: Reminder[] = [
  {id: 11, title: 'Mr. Nice', detail: "12 o clock saturday"},
  {id: 12, title: 'Narco', detail: "12 o clock saturday"},
  {id: 13, title: 'Bombasto', detail: "12 o clock saturday"},
  {id: 14, title: 'Celeritas', detail: "12 o clock saturday"},
  {id: 15, title: 'Magneta', detail: "12 o clock saturday"},
  {id: 16, title: 'RubberMan', detail: "12 o clock saturday"},
  {id: 17, title: 'Dynama', detail: "12 o clock saturday"},
  {id: 18, title: 'Dr IQ', detail: "12 o clock saturday"},
  {id: 19, title: 'Magma', detail: "12 o clock saturday"},
  {id: 20, title: 'Tornado', detail: "12 o clock saturday"}
];
