import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Previousbooking } from './previousbooking';

@Injectable({
  providedIn: 'root'
})
export class PreviousbookingServiceService {
  constructor(private http: HttpClient) {}

  getAllPreviousBooking(): Observable<Previousbooking[]> {
    return this.http.get<Previousbooking[]>('http://localhost:8080/list-previousbooking');
  }

}
