import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiNomsService {


  public numeroImatge : number

  constructor() {

      this.numeroImatge = 0

  }
  public setNumero (numero: number){
    this.numeroImatge = numero
  }

  public getNumero(){
    return this.numeroImatge
  }
}
