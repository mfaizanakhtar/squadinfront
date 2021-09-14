import { Component, OnInit, SimpleChanges } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'rankingtable',
  templateUrl: './rankingtable.component.html',
  styleUrls: ['./rankingtable.component.css']
})
export class RankingtableComponent implements OnInit {

  selectedSports="Cricket"
  ranking:any=[]
  constructor(private stat:StatsService,private router:Router) { }

  ngOnInit(): void {
    this.getAverageStats()
  }

  sportsSelected(){
    this.getAverageStats()
  }

  getAverageStats(){
    this.stat.getcap("/averageStats/"+this.selectedSports).subscribe(res=>{
      this.ranking = res
      console.log(res)
    })
  }

  viewDetail(user) {
    this.router.navigate(['/showstats', user._id]);
  }

  report(reason,id){
    this.stat.update({reason:reason},"/report",id).subscribe(res=>{
      console.log(res)
      this.getAverageStats()
    })
  }

}
