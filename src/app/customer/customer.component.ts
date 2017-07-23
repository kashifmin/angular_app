import { Component, OnInit } from '@angular/core';

export class CustomerData {

   public name: string;
   public email: string;
   public age: number;
   public city: string;
   public address: string;
   public mobileno: number;
   
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerData: CustomerData = new CustomerData();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
