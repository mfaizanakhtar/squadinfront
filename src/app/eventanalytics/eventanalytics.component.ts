import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {  AnalyticsService } from '../analytics.service';
import { calculateViewDimensions, DataItem } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';
import { BaseChartComponent } from '@swimlane/ngx-charts';
import { LegendOptions,LegendPosition,ScaleType,ViewDimensions } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-eventanalytics',
  templateUrl: './eventanalytics.component.html',
  styleUrls: ['./eventanalytics.component.css'],
  
})
export class EventanalyticsComponent implements OnInit {
 
  data:any[]

  constructor(private analytics: AnalyticsService) { }

  ngOnInit(): void {
    this.analytics.getAll().subscribe(res =>{
      var formattedData=[]
      res.forEach(element => {
        formattedData.push({"name":element._id,"value":element.count})
      });
      this.data=formattedData
     
    })
   
}

  

}
