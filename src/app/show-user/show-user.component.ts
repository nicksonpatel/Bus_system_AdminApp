import { Component, OnInit } from '@angular/core';
import { User } from './User1';
import {ShowUserService} from './show-user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  users:User[];

  constructor(private showuserdervice:ShowUserService) { }

  ngOnInit() {

    this.getalluser();
  }

getalluser(){
  this.showuserdervice.getusers().subscribe((res)=>{
      console.log(res.json());
      this.users=res.json();
      console.log(this.users);
      },(err)=>{
      console.log(err);
  });
}

}
