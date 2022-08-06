import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarService } from '../car/car.service';
import { Car } from '../car/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  car: Car = {};

  carform = new FormGroup({
    vehicleNo: new FormControl(''),
    vehicleModel: new FormControl(''),
    vehicleType: new FormControl(''),
    vehicleColor: new FormControl(''),
  });

  constructor(private service: CarService , private router: Router) {}
  ngOnInit(): void {}
  addCar() {
    let car: Car = this.carform.value;

    this.service.addCar(car).subscribe((data: Car) => {
      console.log('car no:' + data.vehicleNo + ' Added Successfully');
      this.router.navigate(['/car-list']);
    });
  }
}
 