import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  triggerCategory = false;
  action = "";
  triggerNation = false;
  triggerSearch = false;
  valueSearch ="";
  constructor() { }
}
