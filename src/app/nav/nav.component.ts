
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName
  type;
  userid;
  notificationcount=2
  no:any
 
  constructor(
    
    private router : Router,
    private authService: AuthService,
    public dialog:MatDialog,
    private notifi: NotificationService
  ) { 
    this.userName = authService.getCurrentUser().name;
    this.type = authService.getCurrentUser().userType;
    this.userid = authService.getCurrentUser()._id;
  }

  ngOnInit(): void {
    this.getnot()
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
  getnot(){
this.notifi.getcap('noofnot/'+this.authService.getCurrentUser()._id).subscribe(res=>{
  this.no = res
  console.log(this.no)
})
  }
  
  logout(){
    this.authService.logout()
    this.router.navigate(['login'])
  }

}

