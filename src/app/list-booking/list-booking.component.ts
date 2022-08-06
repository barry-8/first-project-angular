import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../booking/booking';





@Component({ 

  selector: 'listbooking',

  templateUrl: './list-booking.component.html',

  styleUrls: ['./list-booking.component.css'],

})

export class ListBookingComponent implements OnInit {

  bookings:Booking[] = [];

  constructor(private service: BookingService) {

    let conts: Observable<Booking[]> = this.service.getAllBookings();

    conts.subscribe({

      next: (data: Booking[]) => {

        this.bookings = data;

      },

      error: (err: Error) => {

        console.log(err);

      },

      complete: () => {

        console.log('completed');

      },

    });

  } 



  ngOnInit(): void { }

}