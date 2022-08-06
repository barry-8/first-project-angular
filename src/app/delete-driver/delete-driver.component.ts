import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from '../driver/driver';
import { DriverService } from '../driver/driver.service';

@Component({
  selector: 'app-delete-driver',
  templateUrl: './delete-driver.component.html',
  styleUrls: ['./delete-driver.component.css'],
})
export class DeleteDriverComponent implements OnInit {
  driver: Driver[] = [];
  deleteform = new FormGroup({
    driverId: new FormControl(''),
  });
  constructor(private driverservice: DriverService, private router: Router) {}

  ngOnInit(): void {}
  deleteD() {
    let id = this.deleteform.value['id'];
    console.log(id);

    this.driverservice.deleteDriver(id).subscribe((data: Driver) => {
      console.log(data);
      this.router.navigate(['/driver-list']);
      alert('deleted');
    });
  }
}
