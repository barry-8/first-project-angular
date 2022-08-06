import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from '../driver/driver';
import { DriverService } from '../driver/driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  driver: Driver = {};

  driverForm = new FormGroup({
    id: new FormControl(''),
    driverName: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
  });
 
  constructor(private driverservice: DriverService, private router: Router) { }

  ngOnInit(): void {

 
  }


}
