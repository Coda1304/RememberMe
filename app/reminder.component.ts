/**
 * Created by Adrian on 01/02/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ReminderService} from "./services/reminder.service";
import {Reminder} from "../base/reminder";

@Component({
    selector: 'reminder',
    templateUrl: './html-templates/reminder.template.html',
})

export class ReminderComponent implements OnInit{

    reminders: Reminder[];
    constructor(private reminderService: ReminderService) { }


    getReminders(): void {
        this.reminderService.getReminders().then(reminders => this.reminders = reminders);
    }

    ngOnInit(): void {
        this.getReminders();
    }

}

