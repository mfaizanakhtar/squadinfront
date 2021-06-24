import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { RepondeventService } from '../repondevent.service';
import { EventapplicantsComponent } from '../eventapplicants/eventapplicants.component';
import { EventService } from '../event.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent implements OnInit {
  event:any
  accepted:any
  constructor(
    private auth:AuthService,
    public dialog: MatDialog,
    public actRes: RepondeventService,
    public eve: EventService
  ) { }

  ngOnInit(): void {
    this.getMyEvents();
  }
  open(id){
    this.dialog.open(EventapplicantsComponent,{
      width:'600px',
      data:{eventid:id}
    })
  }
  getMyEvents(){
    this.eve.getcap('user/'+this.auth.getCurrentUser()._id).subscribe(res=>
      {
        this.event = res
        console.log(this.event);
      })
  }

}
