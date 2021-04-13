
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName
  type;
  userid;
  
 
  constructor(
    
    private router : Router,
    private authService: AuthService,
    public dialog:MatDialog
  ) { 
    this.userName = authService.getCurrentUser().name;
    this.type = authService.getCurrentUser().userType;
    this.userid = authService.getCurrentUser()._id;
  }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    // this.userName = this.authService.userName();
    return this.authService.isLoggedIn();
  }

  isPlayer(){
    if(this.type == "Player"){
      return true;
    }
    else{
      return false;
    }

    
  }
  isOrganizer(){
    if(this.type == "Organizer"){
      return true;
    }
    else{
      return false;
    }

    
  }

  isDepartment(){
    if(this.type == "Department"){
      return true;
    }
    else{
      return false;
    }

    
  }
  notification(){
    const dialog = this.dialog.open(NotificationComponent,{
      width:'600px'
    })
  }
  

}

