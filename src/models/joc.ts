import {ServeiNomsService} from "../app/servei-noms.service";

export class Joc {
  public players: string[] = ["Manel","Guillem","Luis"];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;
  // nomsUsuaris: string[] = ["Home","Dona","Mono","pinguino","DonaSeria","Winkboy"]
  // numeroNom: number;

  constructor() {
    for(let i = 1; i < 13; i++) {
      this.stack.push('spade_' + i)
      this.stack.push('hearts_' + i)
      this.stack.push('clubs_' + i)
      this.stack.push('diamonds_' + i)

      shuffle(this.stack);
    }

    //Me daba error al añadir el servicio
    // this.numeroNom = numero.getNumero() N
    // this.players.push(this.nomsUsuaris[this.numeroNom])



  }

}

function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
