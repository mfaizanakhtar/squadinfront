import { Component, OnInit } from '@angular/core';
import { EquipService } from '../equip.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-upload-equipment',
  templateUrl: './upload-equipment.component.html',
  styleUrls: ['./upload-equipment.component.css']
})
export class UploadEquipmentComponent implements OnInit {
  equipmentname:any
  EquipmentCategory:any
  quantity:any
  Price:any
  Summary:any

  constructor(private equipment:EquipService, private auth:AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    this.equipment.create({
      userid:this.auth.getCurrentUser()._id,
      equipmentname:this.equipmentname,
      EquipmentCategory:this.EquipmentCategory,
      quantity:this.quantity,
      Price:this.Price,
      Summary:this.Summary
    }).subscribe(response =>{
      console.log(response);
    })
  }

}
