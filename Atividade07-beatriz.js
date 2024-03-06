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
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}


jogar(jogadorX);
jogar(jogadorO);

jogar(jogadorX);
jogar(jogadorO);

jogar(jogadorX);
jogar(jogadorO);

jogar(jogadorX);
jogar(jogadorO);

jogar(jogadorX);
console.table(tabuleiro);

