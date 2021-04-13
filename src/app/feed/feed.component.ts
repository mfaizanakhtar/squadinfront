import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userType = 'Player'
  user
  data = []

  constructor(
    private router: Router,
    private auth: AuthService,
    private service: UserService,
    private http: Http
  ) 
  { 
    // http.get('http.//localhost:3000/api/users/' + auth.getCurrentUser()._id).subscribe(response =>{
    //   this.user = response.json();
    //   console.log(this.user);
    //   this.data = response.json();
    // })
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.data = data;
    })

    this.user = this.auth.getCurrentUser()
    console.log(this.user)
  }
  

}
