import { Component, OnInit } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit() {
  }

}
