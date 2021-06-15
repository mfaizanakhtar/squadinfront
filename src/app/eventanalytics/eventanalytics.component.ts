import { Component, OnInit } from '@angular/core';
import {  AnalyticsService } from '../analytics.service';
import { Chart } from 'chart.js'
import { ɵallowPreviousPlayerStylesMerge } from '@angular/animations/browser';

@Component({
  selector: 'app-eventanalytics',
  templateUrl: './eventanalytics.component.html',
  styleUrls: ['./eventanalytics.component.css']
})
export class EventanalyticsComponent implements OnInit {
  user;
  

  constructor(private analytics: AnalyticsService) { }

  ngOnInit(): void {
    this.analytics.getAll().subscribe(res =>{
      console.log(res)
      this.user = res;
     
    })
   
  }

  

}
