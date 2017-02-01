/**
 * Created by Adrian on 01/02/2017.
 */
import { Injectable } from '@angular/core';
import { Reminder } from '../../base/reminder';
import { REMINDERS } from '../../base/mock-reminders';

@Injectable()
export class ReminderService {
    getReminders(): Promise<Reminder[]> {
        return Promise.resolve(REMINDERS);
    }
}

