import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  name: string;
  phone: string;
  travellingfrom: string;
  travellingto: string;
  flightdate: string;
  flighttime: string;
  flightclass: string;
  adults: string;
  children: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.name = params.name;
      this.phone = params.phone;
      this.travellingfrom = params.travellingfrom;
      this.travellingto = params.travellingto;
      this.flightdate = params.flightdate;
      this.flighttime = params.flighttime;
      this.flightclass = params.flightclass;
      this.adults = params.adults;
      this.children = params.children;

      console.log(this.name);
      console.log(this.phone);
      console.log(this.travellingfrom);
      console.log(this.travellingto);
      console.log(this.flightdate);
      console.log(this.flighttime);
      console.log(this.flightclass);
      console.log(this.adults);
      console.log(this.children);
    });
  }

}
