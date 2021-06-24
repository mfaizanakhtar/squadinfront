import { Component, OnInit, Type } from '@angular/core';
import { BiodataService } from '../biodata.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-uploaddata',
  templateUrl: './uploaddata.component.html',
  styleUrls: ['./uploaddata.component.css']
})
export class UploaddataComponent implements OnInit {

  academyname: any
  address: any
  sport:any
  height:any
  weight:any
  age:any
  preclubs:any
  sportsback:any

  constructor(
    private bdata: BiodataService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.bdata.create({
      userid:this.auth.getCurrentUser()._id,
      academyname:this.academyname,
      address:this.address,
      sport:this.sport,
      height:this.height,
      weight:this.weight,
      age:this.age,
      preclubs:this.preclubs,
      sportsback:this.sportsback
    }).subscribe(res=>{
      console.log(res)
    })
    alert('Data added')
  }

}
