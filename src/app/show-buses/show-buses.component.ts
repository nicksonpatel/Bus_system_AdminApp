import { Component, OnInit } from '@angular/core';
import { Bus } from './bus';
import { BusService } from './show-buses.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {

  bus=new Bus();
  bus1:Bus[];
  constructor(private busservice:BusService) { }

  ngOnInit() {
    this.getbus();
  }

  addbus(){
    this.busservice.addbus(this.bus).subscribe((res)=>{
      console.log(res);
      this.getbus();
     // this.bus=null;
    },(err)=>{
      console.log(err);
    })
    }

    getbus(){
      this.busservice.getbus().subscribe((res)=>{
          console.log("all buss====="+res.json());
          this.bus1=res.json();
          console.log(this.bus1);
        },(err)=>{
          console.log(err);
      });
    }




}
