import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getAllCar(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8080/allCar');
  }
  findCar(vehicleNo: number): Observable<Car> {
    return this.http.get<Car>('http://localhost:8080/find-Car/' + vehicleNo);
  }
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>('http://localhost:8080/add-car', car);
  }
}
