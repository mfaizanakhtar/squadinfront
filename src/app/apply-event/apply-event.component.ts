import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RepondeventService } from '../repondevent.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-apply-event',
  templateUrl: './apply-event.component.html',
  styleUrls: ['./apply-event.component.css']
})
export class ApplyEventComponent implements OnInit {

  managername : any
  teamname:any 
  clubname: any
  address: any

  constructor(private auth:AuthService,private respond:RepondeventService,@Inject(MAT_DIALOG_DATA) public data: {eventid:String}) { }

  ngOnInit(): void {
    console.log(this.data.eventid)
  }

  respondevent(){
    alert("sent");
    this.respond.create({
      userid:this.auth.getCurrentUser()._id,
      eventid: this.data.eventid,
      managername: this.managername,
      teamname: this.teamname,
      address: this.address
    }).subscribe(res=>{
      console.log(res)
    })
  }

}
