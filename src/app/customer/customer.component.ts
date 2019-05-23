import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  name = new FormControl('');

}