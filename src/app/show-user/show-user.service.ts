import { Injectable } from "@angular/core";
import {Http} from '@angular/http';


@Injectable()
export class ShowUserService{


    constructor(private http:Http){

    }

    getusers(){
       return this.http.get("http://localhost:8080/api/getalluser");
    }

}