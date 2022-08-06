import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from '../car/car.service';
import { Car } from '../car/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  car: Car[] = [];
  constructor(private service: CarService) {
    let car: Observable<Car[]> = this.service.getAllCar();
    car.subscribe({
      next: (data: Car[]) => {
        this.car = data;
      },
      error: (err: Error) => {
        console.log(err);
      }, 
      complete: () => {
        console.log('completed');
      },
    });
  }

  ngOnInit(): void {}
}
