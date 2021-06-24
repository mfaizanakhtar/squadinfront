import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../team.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  teams:any
  teamselected:any
  constructor(private team:TeamService,private auth:AuthService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.getTeams()
  }

  getTeams(){
    this.team.getcap('/team/'+this.auth.getCurrentUser()._id).subscribe(res=>{
      this.teams=res
    })
  }

  AddtoTeam(){
    // console.log(this.teamselected)
    // console.log(this.data)

    this.team.update({playerid:this.data.userid},"/teammember/"+this.teamselected._id,"").subscribe(res=>{
      console.log(res)
    })
  }

}
