// let contador = 0;

// while (contador < 5) {
//   contador++;
//   console.log(contador);
// }
// // While testa a condição antes de entrar no laço de repetição.
// // Se a condição for iniciualmente falsa, o laço não é executado nenhuma vez.
// var x = 20;
// while (x > 10) {
//   console.log(`Entre no laço While...`);
//   x--;
// }
// console.log(`Terminei!`);

// //Contagem regressiva
// let countdown = 5;
// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log("Lançamento!");

// //Estourando o limite do cartão - versão while

// var limite = 500;
// var fatura = 0;

// while (fatura <= limite) {
//   let gasto = Math.random() * 100; //Math.random() cria valor aleatorio entre 0 e 1
//   fatura += gasto;
//   console.log(
//     `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
//     //toFixed alterar o valor mostrado para o usuario em duas casas depois da virgula.
//   );
//   fatura > limite && console.log(`Estourou o limite do cartão`);
//   //&& faz somente um IF, sem else.
// }

// //Estourando o limite do cartão -  versão do while

// console.log("------------------------------------------------------");
// var limite = 500;
// var fatura = 0;

// do {
//   let gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(
//     `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
//     //toFixed alterar o valor mostrado para o usuario em duas casas depois da virgula.
//   );
//   fatura > limite && console.log(`Estourou o limite do cartão`);
// } while (fatura <= limite);

// //Jogo de cara e coroa - melhor de três tentativas
// repetição - 3
// variável cara ou coroa -> aleátoria - 50%
// placar - vitoria e derrotas

var rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrotas = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa";
  escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa";

  if (escolhaJogador == "Cara") {
    console.log(
      `Parabéns,você escolheu ${escolhaJogador} e caiu ${moeda}, você ganhou!`
    );
    vitoria++;
  } else {
    console.log(
      `Que pena, você escolheu ${escolhaJogador} e caiu ${moeda} você perdeu!`
    );
    derrotas++;
  }

  rodada++;
}

console.log("-----------------------------------------------");
console.log("                 Placar                        ");
console.log("-----------------------------------------------");
console.log(
  `vitorias: ${vitoria > derrotas ? "Você ganhou!" : "Você perdeu!"}`
);

