import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { CreatefeedService } from '../createfeed.service';
import { EquipService } from '../equip.service';
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
  equip:any
  constructor(private feed:CreatefeedService,private auth:AuthService,public dialog: MatDialog,private actRes:RespondactivityService,private eq:EquipService) { }

  ngOnInit(): void {
    this.getMyActivity()
    this.getAccepted()
    this.getEquipments()
  }
  open(id){
    this.dialog.open(ApplicantsComponent,{
      data:{activityid:id}
    })
  }
  dialogmsg(e){
    this.dialog.open(MsgEquipmentComponent,{
      width:'600px',data:e
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

  getEquipments(){
    this.eq.getcap("user/"+this.auth.getCurrentUser()._id)
    .subscribe(res=>{
      
      this.equip = res; 
      console.log(this.equip)
    })
  }
}
