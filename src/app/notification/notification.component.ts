import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications:any
  constructor(private auth:AuthService,private notif:NotificationService) { }

  ngOnInit(): void {
    this.getNotification()
  }

  getNotification(){
    this.notif.getcap("user/"+this.auth.getCurrentUser()._id)
    .subscribe(res=>{
      this.notifications=res
    })
  }

}
