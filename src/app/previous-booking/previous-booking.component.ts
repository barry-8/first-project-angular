import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Previousbooking } from '../previousbooking/previousbooking';
import { PreviousbookingServiceService } from '../previousbooking/previousbooking-service.service';

@Component({
  selector: 'app-previous-booking',
  templateUrl: './previous-booking.component.html',
  styleUrls: ['./previous-booking.component.css'],
})
export class PreviousBookingComponent implements OnInit {
  previous: Previousbooking[] = [];
  constructor(private service: PreviousbookingServiceService) {
    let previous: Observable<Previousbooking[]> = this.service.getAllPreviousBooking();
    previous.subscribe({
      next: (data: Previousbooking[]) => {
        this.previous = data;
      },
      error: (err: Error) => { 
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  ngOnInit(): void {
  
  }
}
