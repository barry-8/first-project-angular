import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer/customer';
import { CustomerServiceService } from '../customer/customer-service.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  loginForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router:Router,private route:ActivatedRoute,private service:CustomerServiceService) { }

  ngOnInit(): void {
  }

  doLogin(){
    let email = this.loginForm.controls['emailId'].value;
    let psw = this.loginForm.controls['password'].value;
    this.service.findCustomer(email).subscribe((data: Customer) => {
      console.log(data + 'Done');
      if (data && data.password === psw){
        this.router.navigate(['/customer-home']);
      } else{
        this.router.navigate(['/customer-login']);
      }
    });
  }
}