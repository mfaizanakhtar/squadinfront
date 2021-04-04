import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RespondactivityService } from '../respondactivity.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-apply-activity',
  templateUrl: './apply-activity.component.html',
  styleUrls: ['./apply-activity.component.css']
})
export class ApplyActivityComponent implements OnInit {
  experience:any
  description:any
  address:any
  constructor(private auth:AuthService,private respond:RespondactivityService,@Inject(MAT_DIALOG_DATA) public data: {activityid:String}) { }

  ngOnInit(): void {
    console.log(this.data.activityid)
  }

  respondActivity(){
    this.respond.create({
      userid:this.auth.getCurrentUser()._id,
      feedid:this.data.activityid,
      Experience:this.experience,
      Description:this.description,
      Address:this.address
    }).subscribe(res=>{
      console.log(res)
    })
  }

}
