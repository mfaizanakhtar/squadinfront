import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends DataService {

  constructor(http:Http)  {
    super("http://localhost:3000/api/teams",http);
  }
}
