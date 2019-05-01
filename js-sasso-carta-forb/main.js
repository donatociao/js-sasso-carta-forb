//Sasso Carta e Forbice tra due giocatori CPU

//Definisco una possibile lista di soluzioni
var list = ["sasso", "carta", "forbice"]

//Il giocatore1 sceglie dalla lista e stampo giocatore1
var player1 = list[Math.floor(Math.random() * list.length)]
document.writeln("Il giocatore1 ha scelto " + player1);

//Il giocatore2 sceglie dalla lista e stampo giocatore1
var player2 = list[Math.floor(Math.random() * list.length)]
document.writeln("</br>Il giocatore2 ha scelto " + player2);

//Definisco le condizioni per la vittoria
var risultato = "";

//definisco le condizioni del gioco
switch (true) {
  case player1 == player2:
  risultato = "Pareggio!";
    break;

  case (player1 == "carta" && player2 == "sasso") || (player1 == "forbice" && player2 == "carta") || (player1 == "sasso" && player2 == "forbice") :
    risultato = "Il giocatore1 ha vinto!";
    break;

  case (player1 == "carta" && player2 === "forbice") || (player1 == "forbice" && player2 == "sasso") || (player1 == "sasso" && player2 == "carta"):
    risultato = "Il giocatore2 ha vinto!";
    break;
}

document.writeln("</br>" + risultato );
