import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  services: any[] = [
    {
      id: 1,
      name: 'Car Wash S',
      size: 'S',
      cost: 250
    },
    {
      id: 2,
      name: 'Car Wash M',
      size: 'M',
      cost: 350
    },
    {
      id: 3,
      name: 'Car Wash S',
      size: 'L',
      cost: 500
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
