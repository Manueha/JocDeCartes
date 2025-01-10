import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiTornService {

  private _torn: any;
 constructor() {


 }


  get torn(): any {
    return this._torn;
  }

  set torn(value: any) {
    this._torn = value;
  }
}
