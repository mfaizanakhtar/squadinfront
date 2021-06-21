import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  constructor(private event:EventService) { }

  ngOnInit(): void {
  }

  createEvent(f){
 
    this.event.create(f).subscribe(res=>{
      console.log("event Created")
    })
  }

}
