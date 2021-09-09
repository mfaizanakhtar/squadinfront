import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams:any
  index:any

  constructor(private team:TeamService,private auth:AuthService) { }

  ngOnInit(): void {
    this.getTeams()
  }

  getTeams(){
    this.team.getcap('/team/'+this.auth.getCurrentUser()._id).subscribe(res=>{
      this.teams=res;
    })
  }

}
