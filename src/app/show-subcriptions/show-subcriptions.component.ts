import { Component, OnInit } from '@angular/core';
import {ShowUserService} from '../show-user/show-user.service';
import { User } from '../show-user/User1';
import { Subscription } from './subscription';

@Component({
  selector: 'app-show-subcriptions',
  templateUrl: './show-subcriptions.component.html',
  styleUrls: ['./show-subcriptions.component.css']
})
export class ShowSubcriptionsComponent implements OnInit {

  users:User[];
  sub:Subscription;
  myarr;
  constructor(private showuserService:ShowUserService) { }

  ngOnInit() {
    this.getsub();
  }

getsub(){
  this.showuserService.getusers().subscribe((res)=>{
    console.log("=========="+res.json());
    this.myarr=res.json();
  //  console.log(this.myarr[0].subscription);
   // this.sub=this.users[0].subscription
   // this.sub=res[0];
   // console.log(this.sub);
  },(err)=>{
    console.log(err);
  });
}
}
