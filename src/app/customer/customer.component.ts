import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  formCustomer = new FormGroup({
    name: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    email: new FormControl(''),
  });
  

  constructor() { }

  ngOnInit() {
  }
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.formCustomer.value);
}

}