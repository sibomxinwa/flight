import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TicketComponent } from './ticket/ticket.component';
import { FinalticketComponent } from './finalticket/finalticket.component';

const routes: Routes = [{path: '', component: MenuComponent, children: [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'testimonial', component: TestimonialComponent},
]},
  {path: 'ticket', component: TicketComponent},
  {path: 'finalticket', component: FinalticketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
