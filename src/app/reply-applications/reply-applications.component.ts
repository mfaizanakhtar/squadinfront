import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RespondactivityService } from '../respondactivity.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reply-applications',
  templateUrl: './reply-applications.component.html',
  styleUrls: ['./reply-applications.component.css']
})
export class ReplyApplicationsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{id:String},public dialog: MatDialog,private response:RespondactivityService,private auth:AuthService) { }
  reply:any
  ngOnInit(): void {
    console.log(this.data.id)
  }
  // openDialog(){
  //   this.dialog.open(ReplyApplicationsComponent,{
      
  //   })
  // }
  replySuccess(){
    console.log(this.reply)
    this.response.update({acceptmessage:this.reply,AcceptById:this.auth.getCurrentUser()._id},"accept",this.data.id).subscribe(res=>{
      console.log(res)
    })
  }

}
