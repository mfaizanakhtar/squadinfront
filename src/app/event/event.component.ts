import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateeventComponent } from '../createevent/createevent.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {EventService} from '../event.service'
import { ApplyEventComponent } from '../apply-event/apply-event.component';
import { id } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
 event: any ;
 date;
  constructor(public dialog: MatDialog,
    private events: EventService,
    private auth: AuthService,
    private service: UserService,) { }

  ngOnInit(): void {
    this.getevent();
  }
getevent(){
  this.events.getcap('all').subscribe(response=>{
    console.log(response)
    this.event = response;
  })
}
  openDialog(id){
    const dialogRef = this.dialog.open(ApplyEventComponent,{
      width: '600px', data:{eventid:id}
    })
  }
}
