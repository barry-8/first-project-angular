import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../booking/booking';
@Component({
  selector: 'view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  booking: Booking={};
  constructor(private service: BookingService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let bookingNo = Number.parseInt(id);
    let obsCont:Observable<Booking>= this.service.findContacts(bookingNo);
    
    obsCont.subscribe(
      {
        next: (data:any)=> {
          this.booking = {...data};
        },
        error: (err:Error) => {console.log('contact not found');},
        complete: () =>{console.log('find contact process completed');}
        }
      
    );
  }

}
