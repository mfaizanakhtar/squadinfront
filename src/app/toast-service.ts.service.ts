import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService.TsService {
  toasts: any[] = [];
  
  constructor() { }
}
