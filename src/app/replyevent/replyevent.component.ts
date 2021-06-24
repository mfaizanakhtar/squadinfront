import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RepondeventService } from '../repondevent.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-replyevent',
  templateUrl: './replyevent.component.html',
  styleUrls: ['./replyevent.component.css']
})
export class ReplyeventComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{id:String,userid:String},public dialog: MatDialog,private response:RepondeventService,private auth:AuthService) { }
  reply: any
  uid:any
  ngOnInit(): void {
    console.log(this.data.id)
    console.log(this.data.userid)
    this.uid = this.data.userid
  }

  replySuccess(){
    console.log(this.reply)
    this.response.update({acceptmessage:this.reply,AcceptById:this.auth.getCurrentUser()._id},"accept",this.data.id).subscribe(res=>{
      console.log(res)
    })
  }

}
