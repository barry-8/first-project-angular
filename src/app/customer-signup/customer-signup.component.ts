import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer';
import { CustomerServiceService } from '../customer/customer-service.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css'],
})
export class CustomerSignupComponent implements OnInit {
  constructor(
    private service: CustomerServiceService,
    private router: Router
  ) {}
  customer: Customer = {};
  addCustomerForm = new FormGroup({
    emailId: new FormControl(''),
    userName: new FormControl(''),
    city: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    state: new FormControl(''),
  });

  ngOnInit(): void {}

  addCustomer() {
    let customer: Customer = this.addCustomerForm.value;
    this.service.addCustomer(customer).subscribe((data: Customer) => {
      console.log('Customer Id:' + data.id + ' Added Successfully');
      this.router.navigate(['/customer-login']);
    });
  }
}
