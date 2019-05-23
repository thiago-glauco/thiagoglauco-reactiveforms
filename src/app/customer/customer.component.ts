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
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      cep: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
    
  });
  

  constructor() { }

  ngOnInit() {
  }
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.dir(this.formCustomer);
}

}