import { Component, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // todoItems must be fetched from the server!
  todoItems: any[] = [
    { title: 'Car service tomorrow at 10.30AM',
      description: 'Remind Mr. Gautham to get his car for service tomorrow!',
      actions: ['Call', 'SMS'],
      time: '10:30AM'
    },
    { title: 'Car service tomorrow at 10.30AM',
      description: 'Remind Mr. Gautham to get his car for service tomorrow!',
      actions: ['Call', 'SMS'],
      time: '10:30AM'
    },
    { title: 'Car service tomorrow at 10.30AM',
      description: 'Remind Mr. Gautham to get his car for service tomorrow!',
      actions: ['Call', 'SMS'],
      time: '10:30AM'
    }
  ];

  viewDate: Date = new Date();

  

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,

    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,

    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
