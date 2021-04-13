import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentresponseService extends DataService {

  constructor(http:Http) {
    super("http://localhost:3000/api/equipmentResponse",http)
   }
}