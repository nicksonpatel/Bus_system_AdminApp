import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowBusesComponent } from './show-buses/show-buses.component';
import { ShowDestinationComponent } from './show-destination/show-destination.component';
import { ShowTicketsComponent } from './show-tickets/show-tickets.component';
import { ShowSubcriptionsComponent } from './show-subcriptions/show-subcriptions.component';
import {BusService} from './show-buses/show-buses.service';
import {ShowUserService} from './show-user/show-user.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    ShowUserComponent,
    ShowBusesComponent,
    ShowDestinationComponent,
    ShowTicketsComponent,
    ShowSubcriptionsComponent,
   
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,AppRoutingModule

  ],
  providers: [BusService,ShowUserService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
