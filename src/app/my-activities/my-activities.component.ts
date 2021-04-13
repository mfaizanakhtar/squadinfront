import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { CreatefeedService } from '../createfeed.service';
import { MsgEquipmentComponent } from '../msg-equipment/msg-equipment.component';
import { RespondactivityService } from '../respondactivity.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {
  activity:any
  acceptedresponse:any
  constructor(private feed:CreatefeedService,private auth:AuthService,public dialog: MatDialog,private actRes:RespondactivityService) { }

  ngOnInit(): void {
    this.getMyActivity()
    this.getAccepted()
  }
  open(id){
    this.dialog.open(ApplicantsComponent,{
      data:{activityid:id}
    })
  }
  dialogmsg(){
    this.dialog.open(MsgEquipmentComponent,{
      width:'600px'
    })
  }

  getMyActivity(){
    this.feed.getcap('user/'+this.auth.getCurrentUser()._id).subscribe(res=>{
      this.activity=res
      console.log(this.activity)
    })    
  }

  getAccepted(){
    this.actRes.getcap('accepteduser/'+this.auth.getCurrentUser()._id).subscribe(res=>{
      this.acceptedresponse=res
      console.log(this.acceptedresponse)
    })
  }
}
