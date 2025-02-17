
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable,of,Subscription } from 'rxjs';
import { CommentService } from '../comment.service';
import { BiodataService } from '../biodata.service';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { MatDialog } from '@angular/material/dialog';
import { AddteamComponent } from '../addteam/addteam.component';


@Component({
  selector: 'app-showstats',
  templateUrl: './showstats.component.html',
  styleUrls: ['./showstats.component.css']
})
export class ShowstatsComponent implements OnInit {

  profile;
  user;
  data = [];
  comments;
  com;
  biodata;
  dat = [];

 
  constructor(private http: Http,
    private service :StatsService,
    private router: Router,
    private auth: AuthService,
    private route:ActivatedRoute,
    private comment:CommentService,
    private bdata:BiodataService,
    private dialog:MatDialog ){


    }

  ngOnInit(): void {
    // this.service.getAll().subscribe(data=> {
    //   this.data = data;
    
    
    this.route.params.subscribe(params=>{
      this.user = params['id'];
      this.DataAdd('all');
      // console.log(this.user);

      this.getmydata();

    })

    this.getComments();
  }
  
addcomment(){
  console.log(this.auth.getCurrentUser())
  this.comment.create({comment:this.com,player:this.user,userid:this.auth.getCurrentUser().name}).subscribe(res=>{
    
  })

  this.getComments();
  this.com="";
}

getComments(){
  this.comment.getById(this.user).subscribe(com=>{
    this.comments = com; 
    console.log(this.comments)
  })
}

isNotPlayer(){
  if(this.auth.getCurrentUser().userType!='Player') return true;
  else return false;
}

clicked(sport){
  console.log(sport);
  this.DataAdd(sport);
}

DataAdd(sport){
  
  if(sport == 'all')
  {
    console.log(this.user)
    this.http.get('http://localhost:3000/api/stats/mystats/'+this.user).subscribe(response => {
      this.profile=response.json();
      console.log(this.profile);
    }
  )
  }

  else{
    this.http.post('http://localhost:3000/api/stats/sport',{id:this.user,sports:sport}).subscribe(response => {
      this.profile=response.json(); 
    }
  )
  } 
}
// getmydata(){
//   this.bdata.getcap('bio/'+this.auth.getCurrentUser()._id).subscribe(res=>{
//     this.biodata = res
//     console.log(this.biodata);
    
//   })
// }

getmydata(){
  this.bdata.getcap('bio/'+this.user).subscribe(res=>{
    this.biodata = res
    console.log("data",this.biodata);
    
  })
}
getadd(){
  
  var dialogRef = this.dialog.open(AddteamComponent,{
    width:'600px',data:{userid:this.user}
  })
}
  
}


