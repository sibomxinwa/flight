import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = '';
  phone = '';
  travellingfrom = '';
  travellingto = '';
  flightdate = '';
  flighttime = '';
  flightclass = '';
  adults = '';
  children = '';

  constructor(private router: Router) { }

  bookingConfirmed() {
    this.router.navigate(['/ticket'], { queryParams: { name: this.name,
                                                       phone: this.phone,
                                                       travellingfrom: this.travellingfrom,
                                                       travellingto: this.travellingto,
                                                       flightdate: this.flightdate,
                                                       flighttime: this.flighttime,
                                                       flightclass: this.flightclass,
                                                       adults: this.adults,
                                                       children: this.children,
      }
      });

  }

  ngOnInit() {
  }

}
