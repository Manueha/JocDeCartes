import {Component, Input, OnInit} from '@angular/core';
import {ServeiNomsService} from "../servei-noms.service";

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent implements OnInit{

  @Input() name: any;
  @Input() posicio: any;

  imatge: any;
  public tornPersona: any;

  constructor(public s: ServeiNomsService) {



    var arrayImatges = ["/assets/img/profile/1.webp","/assets/img/profile/2.png","/assets/img/profile/monkey.png","/assets/img/profile/pinguin.svg","/assets/img/profile/serious-woman.svg","/assets/img/profile/winkboy.svg"]

    let imatgeRandom  = Math.floor(Math.random()*5+1)

    this.imatge = arrayImatges[imatgeRandom]


    s.setNumero(imatgeRandom)



  }

  ngOnInit() {
    this.tornPersona = document.getElementsByClassName("player")

  }
}
