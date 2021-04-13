import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends DataService{

  constructor(http:Http,private localhttp:Http) {
    super("http://localhost:3000/api/notifications",http)
   }

   addNotification(id,title){
     this.localhttp.post("http://localhost:3000/api/notifications/user",{
      userid:id,
      title:title
     }).subscribe(res=>{
       console.log(res)
     })
   }

   seenNotification(id){
     this.localhttp.put("http://localhost:3000/api/notifications/userseen/"+id,{})
     .subscribe(res=>{
       console.log(res)
     })
   }
}
