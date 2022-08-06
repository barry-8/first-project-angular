import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private httpClient: HttpClient) {}

  getAllDriver(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>('http://localhost:8080/allDriver');
  }

  addDriver(driver: Driver): Observable<Object> {
    return this.httpClient.post<Driver[]>(
      'http://localhost:8080/add-driver',
      driver
    );
  }
  updateDriver(id: number, driver: Driver): Observable<Object> {
    return this.httpClient.put<Driver[]>(
      'http://localhost:8080/update-driver/${id}',
      driver
    );
  }
  deleteDriver(driver: string): Observable<Object> {
    return this.httpClient.delete('http://localhost:8080/delete-driver/${id}');
  }
}
