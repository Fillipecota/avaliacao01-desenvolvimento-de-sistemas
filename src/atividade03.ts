import leia from "readline-sync"
export default function atividade03() {
  console.log('Atividade 03');

  var jogador = leia.keyInSelect(["pedra", "tesoura", "papel"]) + 1
  var computador = Math.trunc(Math.random() * 3) + 1


  switch (jogador) {
    case 1:
      if (computador === 1) {
        console.log("pedra X pedra empate")
      } else
        if (computador === 2) {
          console.log("pedra X tesoura  voce ganhou")
        } else
          if (computador === 3) {
            console.log("pedra X papel voce perdeu")
          }
      break;

    case 2:
      if (computador === 1) {
        console.log("tesoura X pedra voce perdeu")
      } else
        if (computador === 2) {
          console.log("tesoura X tesoura  voce empatou")
        } else
          if (computador === 3) {
            console.log("tesoura X papel voce ganhou")
          }
      break;

    case 3:
      if (computador === 1) {
        console.log("papel X pedra voce ganhou")
      } else
        if (computador === 2) {
          console.log("papel X tesoura  voce perdeu")
        } else
          if (computador === 3) {
            console.log("papel X papel empatou")
          }
      break
  }







}