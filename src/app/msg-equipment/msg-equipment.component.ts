import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquipmentresponseService } from '../equipmentresponse.service';

@Component({
  selector: 'app-msg-equipment',
  templateUrl: './msg-equipment.component.html',
  styleUrls: ['./msg-equipment.component.css']
})
export class MsgEquipmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data,private equipresponse:EquipmentresponseService) { }
  equipresponsearray:any
  ngOnInit(): void {
    // console.log(this.data)
    this.getEquipResponse()
  }

  getEquipResponse(){
    this.equipresponse.getcap("equipment/"+this.data._id)
    .subscribe(res=>{
      this.equipresponsearray=res
      console.log(this.equipresponsearray)
    })
  }

}
