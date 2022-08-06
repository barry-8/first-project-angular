import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../booking/booking';

@Component({
  selector: 'add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
})
export class AddBookingComponent implements OnInit {
  bookings: Booking = {};
  [x: string]: any;
  Bookingform = new FormGroup({
    bookingNo: new FormControl(''),
    pickupFrom: new FormControl(''),
    dropAt: new FormControl(''),
    customerId: new FormControl(''),
    vehicleNo: new FormControl(''),
    driverId: new FormControl(''),
    fare: new FormControl(''),
  });
  @Output() addBookingEmitter = new EventEmitter<Booking>();
  constructor(private service: BookingService, private router: Router) {}

  ngOnInit(): void {}
  addBooking() {
    let booking: Booking = this.Bookingform.value;
    this.service.addBooking(booking).subscribe((data: Booking) => {
      console.log(data.bookingNo + 'added Successfully');
      this.router.navigate(['/list-booking']);
    });
  }
}
