import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquipmentresponseService } from '../equipmentresponse.service';
import { NotificationService } from '../notification.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buy-equipment',
  templateUrl: './buy-equipment.component.html',
  styleUrls: ['./buy-equipment.component.css']
})
export class BuyEquipmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private eqres:EquipmentresponseService,private auth:AuthService,private notif:NotificationService) { }
  Message:any
  ngOnInit(): void {
    console.log(this.data)
  }

  submit(){
    this.eqres.createwithcap({
      userid:this.auth.getCurrentUser()._id,
      equipmentid:this.data._id,
      message:this.Message
    },"equipment")
    .subscribe(res=>{
      console.log(res)
    })

    this.notif.addNotification(this.data.userid._id,"You got a new offer message")
  }

}
