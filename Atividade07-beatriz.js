console.log(`--------------------------------------------------`);

//Supondo quea população de um país A seja de a habitantes com uma
//taxa anual de crescimento de 3% e que a população de um paius B seja
//de b habitantes, com uma taxa anual de crescimento de 1,5% , fazer um
//algoritmo que calcule e escreve o número de anos necessarios para que
//a população do país A ultrapasse ou iguale a população do país B,
//mantidas essas taxas de crescimento.
//popA = 100003
//popB = 300004

var popA = 100003;
var popB = 300004;
anos = 0;

while (popA < popB) {
  popA += popA * 0.03;
  popB += popB * 0.015;
  anos++;
}
console.log(`O número de anos necessarios para que a popA 
ultrapasse ou iguale a popB é ${anos}`);

console.log(`--------------------Desafio-----------------------------`);
//criar um "jogo da velha"que mostre as informações dentro da imagem
//abaixo, Inserir as informações de forma randomica. Informar ao quem
//ganhou X ou O.

// console.log(`___|___|___`)
// console.log(`___|___|___`)
// console.log(`   |   |   `)

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][0] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][0]} ganhou!`);
      return jogadorAtual;
    }
  }

  for (let i = 0; i < 3; i++) {
    // Verifica colunas
    if (
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[0][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[0][i]} ganhou!`);
      return jogadorAtual;
    }
  }

  if (
    // Verifica diagonais
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[0][0] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][0]} ganhou!`);
    return jogadorAtual;
  }

  if (
    // Verifica diagonais
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[0][2] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][2]} ganhou!`);
    return jogadorAtual;
  }

  if (!tabuleiro.some((linha) => linha.includes(" "))) {
    // Empate
    console.log(`O jogo empatou!`);
    return "Empate";
  }

  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual); // Jogada do jogador 1
  console.table(tabuleiro); // Exibir o tabuleiro atualizado
  vencedor = verificaVencedor(); // Verificar vencedor

  if (!vencedor) {
    jogar(jogadorAtual); // Se não houver vencedor, joga o jogador 2
    console.table(tabuleiro); // Exibir o tabuleiro atualizado
    vencedor = verificaVencedor(); // Verificar vencedor após jogada do jogador 2
  }
}