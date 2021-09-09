import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {EventService} from '../event.service'
import { DataService } from '../services/data.service';
import { RepondeventService } from '../repondevent.service';

@Component({
  selector: 'app-event-teams',
  templateUrl: './event-teams.component.html',
  styleUrls: ['./event-teams.component.css']
})
export class EventTeamsComponent implements OnInit {
  data: any

  constructor(
    private auth: AuthService,
    private User: UserService,
    private event: RepondeventService,


  ) { }

  ngOnInit(): void {
    this.getteams()
  }

  getteams(){
    this.event.getAll().subscribe(res=>{
      this.data = res;
      console.log(this.data)
    })
  }

}
