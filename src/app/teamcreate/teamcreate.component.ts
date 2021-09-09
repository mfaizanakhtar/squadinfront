import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teamcreate',
  templateUrl: './teamcreate.component.html',
  styleUrls: ['./teamcreate.component.css']
})
export class TeamcreateComponent implements OnInit {
  teamname:any

  constructor(private team:TeamService,private Auth:AuthService) { }

  ngOnInit(): void {
  }
  createteam(){
    alert('Team Created')
    this.team.create({userid:this.Auth.getCurrentUser()._id,teamname:this.teamname}).subscribe(res=>{
      console.log(res)
      
    })
  }
}
