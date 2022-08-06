import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DriverService } from '../driver/driver.service';
import { Driver } from '../driver/driver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver-list.component.html',
  styleUrls: ['./add-driver-list.component.css'],
})
export class AddDriverComponent implements OnInit {
  driver: Driver = {};

  driverForm = new FormGroup({
    id: new FormControl(''),
    driverName: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(private driverservice: DriverService, private router: Router) {}
  ngOnInit(): void {}

  addDriver() {
    let driver: Driver = this.driverForm.value;

    this.driverservice.addDriver(driver).subscribe((data: Driver) => {
      console.log('driver Id:' + data.id + ' Added Successfully');
      this.router.navigate(['/driver-list']);
    });
  }

}
