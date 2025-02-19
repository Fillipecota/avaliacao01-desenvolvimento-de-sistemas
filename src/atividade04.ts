import leia from "readline-sync"
export default function atividade04() {
  console.log('Atividade 04');

  var numero = Math.trunc(Math.random() * 100) + 1
  console.log(numero)

  do {
    var numjogador = leia.questionInt("DIGITE UM NUMERO: ")
    if (numjogador > numero) {
      console.log(` O NUMERO É MENOR`)
    } if (numjogador < numero) {
      console.log("O NUMEOR É MAIOR")
    }


  } while (numero !== numjogador);
  console.log(`${numjogador} voce acertou`)

}