import {Ticket} from '../show-tickets/ticket';
import {Subscription} from '../show-subcriptions/subscription';

export class User{

		id:Int32Array;
        userName:string;
		dob:string;
		gender:string;
		mobile:string;
		adharNo:string;
	    email:string;
		psw:string;
		tickets:Array<Ticket>;
		subscription:Subscription;
}