import leia from "readline-sync"
export default function atividade02() {

  let idade = leia.questionInt("DIGITE SUA IDADE: ")

  if (idade < 12) {
    console.log(`${idade} AINDA É UMA CRINAÇA`)
  } else
    if (idade >= 12 && idade <= 17) {
      console.log(`${idade} É UM ADOLESCENTE`)
    } else
      if (idade >= 18 && idade <= 59) {
        console.log(`${idade} JA É UM ADULTO`)
      } else
        if (idade > 60) {
          console.log(`${idade} JA É IDOSO`)
        }
  console.log('Atividade 02');
}

// - Menor de 12 anos: "Criança"
//   - De 12 a 17 anos: "Adolescente"
//   - De 18 a 59 anos: "Adulto"
//   - 60 anos ou mais: "Idoso"