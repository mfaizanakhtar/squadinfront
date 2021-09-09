import { Component, OnInit,Inject  } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog'; 
import { RepondeventService } from '../repondevent.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { ReplyeventComponent } from '../replyevent/replyevent.component';

@Component({
  selector: 'app-eventapplicants',
  templateUrl: './eventapplicants.component.html',
  styleUrls: ['./eventapplicants.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventapplicantsComponent implements OnInit {
  eventapplicants: any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {eventid:String},private response:RepondeventService, public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getApplicants()
  }

  getApplicants(){
    this.response.getcap('event/'+this.data.eventid).subscribe(res=>{
      this.eventapplicants = res;
      console.log(this.eventapplicants)
    })
  }

  open(eventid,userid){
    
    this.dialog.open(ReplyeventComponent,{
      data:{id:eventid,userid:userid}
      
    })
    alert('Sent')
  }

}
