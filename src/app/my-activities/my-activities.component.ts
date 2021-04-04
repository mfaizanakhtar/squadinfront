import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { CreatefeedService } from '../createfeed.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {
  activity:any
  constructor(private feed:CreatefeedService,private auth:AuthService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMyActivity()
  }
  open(id){
    this.dialog.open(ApplicantsComponent,{
      data:{activityid:id}
    })
  }

  getMyActivity(){
    this.feed.getcap('user/'+this.auth.getCurrentUser()._id).subscribe(res=>{
      this.activity=res
      console.log(this.activity)
    })
    
  }
}
