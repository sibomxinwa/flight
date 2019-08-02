import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutComponent } from './about/about.component';
import { DestinationsComponent } from './destinations/destinations.component';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';
import { FinalticketComponent } from './finalticket/finalticket.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    TestimonialComponent,
    AboutComponent,
    DestinationsComponent,
    TicketComponent,
    FinalticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
