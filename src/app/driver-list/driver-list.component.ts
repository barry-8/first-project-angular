import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverService } from '../driver/driver.service';
import { Driver } from '../driver/driver';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  driver: Driver[] = [];
  

  constructor(private driverservice: DriverService, private router: Router) {
    let driver: Observable<Driver[]> = this.driverservice.getAllDriver();
    driver.subscribe({
      next: (data: Driver[]) => {
        this.driver = data;
      },
      error: (err: Error) => {
        console.log(err);
      },
      complete: () => {
        console.log('deleted');
      },
    });
  }

  ngOnInit(): void {}

 
}
