import leia from "readline-sync"
export default function atividade01() {
  console.log('Atividade 01');

  var nota = leia.questionInt("Digite um numero de 0 A 100: ")


  if (nota >= 90 && nota <= 100) {
    console.log("A")
  } else
    if (nota >= 80 && nota <= 89) {
      console.log("B")
    } else
      if (nota >= 70 && nota <= 79) {
        console.log("C")
      } else
        if (nota >= 60 && nota <= 69) {
          console.log("D")
        } else
          if (nota >= 0 && nota <= 60) {
            console.log("F")
          } else
            if (nota < 0 || nota > 100) {
              console.log(`${nota} É INVALIDA`)
            }
}

// Nota entre 90 e 100: "A"
// - Nota entre 80 e 89: "B"
// - Nota entre 70 e 79: "C"
// - Nota entre 60 e 69: "D"
// - Nota abaixo de 60: "F"
