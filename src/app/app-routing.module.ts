import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowBusesComponent } from './show-buses/show-buses.component';
import { ShowDestinationComponent } from './show-destination/show-destination.component';
import { ShowTicketsComponent } from './show-tickets/show-tickets.component';
import { ShowSubcriptionsComponent } from './show-subcriptions/show-subcriptions.component';
import {AdminNavComponent} from './admin-nav/admin-nav.component'
const routes: Routes = [
  
  {path:'adminhome',component:AdminNavComponent,
  children:[
    {path:'',redirectTo:'showusers',pathMatch:'full'},
    {path:'showusers',component:ShowUserComponent},
    {path:'show-busses',component: ShowBusesComponent},
    {path:'show-destinations',component: ShowDestinationComponent},
    {path:'show-tickets',component:ShowTicketsComponent},
    {path:'show-subcriptions',component: ShowSubcriptionsComponent},
  ]},
  //{path:'showusers',component:ShowUserComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }