import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent implements OnInit {

  sellCarForm = new FormGroup({});

  constructor(private router:Router,private route:ActivatedRoute) { }

  submit(){
    this.router.navigate(['/car-sold']);
  }

  ngOnInit(): void {
  }
}