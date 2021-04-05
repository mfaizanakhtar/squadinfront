import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reply-applications',
  templateUrl: './reply-applications.component.html',
  styleUrls: ['./reply-applications.component.css']
})
export class ReplyApplicationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(ReplyApplicationsComponent,{
      
    })
  }

}
