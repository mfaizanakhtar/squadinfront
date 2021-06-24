import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../notification.service';
import { RespondactivityService } from '../respondactivity.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reply-applications',
  templateUrl: './reply-applications.component.html',
  styleUrls: ['./reply-applications.component.css']
})
export class ReplyApplicationsComponent implements OnInit {

  constructor(private notif:NotificationService,@Inject(MAT_DIALOG_DATA) public data:{id:String,userid:String},public dialog: MatDialog,private response:RespondactivityService,private auth:AuthService) { }
  reply:any
  uid:any
  ngOnInit(): void {
    console.log(this.data.id)
    console.log(this.data.userid)
    this.uid=this.data.userid

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

    this.notif.addNotification(this.uid._id,"Your request is accepted")
  }
  
}
