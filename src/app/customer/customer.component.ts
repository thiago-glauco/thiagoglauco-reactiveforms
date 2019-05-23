import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  private formCustomer: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      cep: [''],
      city: [''],
      state: [''],
    })
    
  });
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.dir(this.formCustomer);
}

}