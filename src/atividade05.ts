import leia from "readline-sync"
export default function atividade05() {
  console.log('Atividade 05');

  let Time = [];

  const jogador = {
    Nome: "joão",
    Qgol: 10,
    PsCerto: 20,
    PsErrado: 10

  }

  for (let i = 0; i < 10; i++) {
    var nome = leia.question("NOME DO JOGADOR: ")
    var qgol = leia.questionInt("QUANTOS GOL FOI FEITO:  ")
    var pcerto = leia.questionInt("QUANTOS PASSOS CERTO FOI FEITO: ")
    var psrrados = leia.questionInt("QUANTOS PASSO ERRADOR FOI FEITO: ")

    jogador.Nome = nome
    jogador.Qgol = qgol
    jogador.PsCerto = pcerto
    jogador.PsErrado = psrrados
  }



}


// Cada Gol: 50 Pontos
// Cada Passe Certo: 10 Pontos
// Cada Passe Errado: -5 Pontos


// Pontuação < 50 - Péssima partida.
// Pontuação de 50 até 100 - Partida ruim.
// Pontuação de 100 até 150 - Fez o básico
// Pontuação de 150 até 200 - Foi bem na partida
// Pontuação acima de 200 - Jogou demais
