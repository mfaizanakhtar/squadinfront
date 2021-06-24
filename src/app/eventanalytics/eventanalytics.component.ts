import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {  AnalyticsService } from '../analytics.service';
import { calculateViewDimensions, DataItem } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';
import { BaseChartComponent } from '@swimlane/ngx-charts';
import { LegendOptions,LegendPosition,ScaleType,ViewDimensions } from '@swimlane/ngx-charts';
import { BiodataService } from '../biodata.service';


@Component({
  selector: 'app-eventanalytics',
  templateUrl: './eventanalytics.component.html',
  styleUrls: ['./eventanalytics.component.css'],
  
})
export class EventanalyticsComponent implements OnInit {
 
  userdata:any[]
  sportsdata:any[]

  constructor(private analytics: AnalyticsService,private biodata:BiodataService) { }

  ngOnInit(): void {
    this.userAnalytics()
    this.sportsAnalytics()
   
}

userAnalytics(){
  this.analytics.getAll().subscribe(res =>{
    var formattedData=[]
    res.forEach(element => {
      formattedData.push({"name":element._id,"value":element.count})
    });
    this.userdata=formattedData
   
  })
}

sportsAnalytics(){
  this.biodata.getcap('sports').subscribe(res=>{
    var formattedData=[]
    res.forEach(element => {
      formattedData.push({"name":element._id,"value":element.count})
    });
    this.sportsdata=formattedData;
  })
}

  

}
