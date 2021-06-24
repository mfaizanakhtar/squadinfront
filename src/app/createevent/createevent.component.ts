import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {
eventname:any
eventCategory:any
eventDate:any
eventtime: any
summary:any
  constructor(private event:EventService,private auth: AuthService,) { }

  ngOnInit(): void {
  }

  // createEvent(f){
 
  //   this.event.create(f).subscribe(res=>{
  //     console.log("event Created")
  //   })
  // }

  createEvent(){
    alert("event added")
    this.event.create( {
      userid:this.auth.getCurrentUser()._id,
      eventname: this.eventname,
      EventCategory: this.eventCategory,
      eventDate: this.eventDate,
      eventtime: this.eventtime,
      summary: this.summary
    }).subscribe(res => {
      console.log(res);
    })
    
  }

}
