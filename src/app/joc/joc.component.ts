import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ServeiTornService} from "../servei-torn.service";
import {style} from "@angular/animations";
import {ServeiNomsService} from "../servei-noms.service";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  cartaActual: string = '';
  punts: number = 0;


  constructor() {


  }

  ngOnInit(): void {
    this.newGame();



    var torn = document.getElementById("start-label-box")!
    torn.onclick = function (){
      // @ts-ignore
      torn.style.backgroundColor = "red"
    }


  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;

      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
        this.cartaActual = this.currentCard
        for (let i = 1; i < 13; i++){
          if (this.cartaActual === "hearts_"+i || "clubs_"+i || "spades_"+i || "diamonds_"+i){
            this.punts = this.punts + i

          }
        }
      }, 1000);
    }

  }






}
