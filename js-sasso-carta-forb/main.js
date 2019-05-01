//Sasso Carta e Forbice tra due giocatori CPU

//Definisco una possibile lista di soluzioni
var list = ["sasso", "carta", "forbici"]

//Il giocatore1 sceglie dalla lista e stampo giocatore1
var player1 = list[Math.floor(Math.random() * list.length)]
document.getElementById('p1').innerHTML = "</br>Il giocatore1 ha scelto " + player1;

//Il giocatore2 sceglie dalla lista e stampo giocatore1
var player2 = list[Math.floor(Math.random() * list.length)]
document.getElementById('p2').innerHTML = "</br>Il giocatore2 ha scelto " + player2;

//dichiaro variabile vuota risultato
var risultato = "";

//definisco le condizioni del gioco
switch (true) {
  case player1 == player2:
  risultato = "Pareggio!";
    break;

  case (player1 == "carta" && player2 == "sasso") || (player1 == "forbici" && player2 == "carta") || (player1 == "sasso" && player2 == "forbici") :
    risultato = "Il giocatore1 ha vinto!";
    break;

  case (player1 == "carta" && player2 === "forbici") || (player1 == "forbici" && player2 == "sasso") || (player1 == "sasso" && player2 == "carta"):
    risultato = "Il giocatore2 ha vinto!";
    break;
}

//stampo risultato nel div apposito
document.getElementById('ris').innerHTML = "</br>" + risultato;

//definisco le condizioni per la visualizzazione delle immagini
switch (player1) {
  case "sasso":
  document.getElementById('sasso1').style.display = 'block';
  break;
  case "carta":
  document.getElementById('carta1').style.display = 'block';
  break;
  case "forbici":
  document.getElementById('forbici1').style.display = 'block';
  break;
}

switch (player2) {
  case "sasso":
  document.getElementById('sasso2').style.display = 'block';
  break;
  case "carta":
  document.getElementById('carta2').style.display = 'block';
  break;
  case "forbici":
  document.getElementById('forbici2').style.display = 'block';
  break;
}
