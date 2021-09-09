import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit,Inject } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { RespondactivityService } from '../respondactivity.service';
import { ReplyApplicationsComponent } from '../reply-applications/reply-applications.component';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ApplicantsComponent implements OnInit {
  applicants:any

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {activityid:String},private response:RespondactivityService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getApplicants()
  }

  getApplicants(){
    this.response.getcap('feed/'+this.data.activityid).subscribe(res=>{
      this.applicants = res
      console.log(this.applicants)
    })
  }
  openDialog(responseid,userid){
    // console.log(responseid)
    this.dialog.open(ReplyApplicationsComponent,{
      data:{id:responseid,userid:userid}
    })
    alert('sent')
  }
}
