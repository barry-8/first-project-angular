
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';



 @Injectable({
  providedIn: 'root'
})
export class BookingService {
  [x: string]: any; constructor(private http: HttpClient) { }
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('http://localhost:8080/list-bookings');
  }
  findBookings(bookingNo: number): Observable<Booking> {
    return this.http.get<Booking>('http://localhost:8080/view-bookings/' +bookingNo);
  }
  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>('http://localhost:8080/add-bookings', booking);
  }
}