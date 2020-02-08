import { Injectable } from "@angular/core";
import { Bus } from "./bus";
import {Http, RequestOptions,Headers} from '@angular/http';

@Injectable()
export class BusService{

    constructor(private http:Http){


    }


    addbus(bus:Bus){
        let body=JSON.stringify(bus);
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers}); 
        console.log("in body"+body);
        return this.http.post("http://localhost:8080/api/addbus",body,options);
       
    }

    getbus(){
        return this.http.get("http://localhost:8080/api/getallbus");
    }
}