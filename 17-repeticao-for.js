//Laço de repetoção FOR
//ercrever para o usuário 1000x "Prestar mais atenções nas aulas!"

//mostrando números impares
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números impares com IF
for (let i = 0; i <= 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log(
  "----------Escreva todos os números de 1 a 20-----------------------"
);
for (let num = 1; num <= 20; num++) {
  console.log(num);
}
console.log(
  "---------Escreva todos os números PARES entre 1 e 20 com FOR---------"
);

for (let n = 2; n <= 20; n += 2) {
  console.log(n);
}
for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) console.log(n); //
}

console.log("---------------------------------------------------------------");

//Dado um vetor com números 5,6,8,14,0,9,7,2
//Calcule e exiba a somatória de seus elementos ultilizando.
//FOR

//VAR = cria variavel global
//CONST = cria constante, não muda
//LET = cria variavel funciojnal dentro de um grupo de codigo
// tudo que está dentro de chaves é um grupo de codigo.

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(`A somatória dos elementos do array é: ${soma}`);

//Dado um vetor com números 5, 6, 8, 14, 0, 9, 7, 2.
//Multiplique todos os seus elementos por 3 ultilizando e loop FOR
//Em seguida, mostre o novo vetor.

var number = [5, 6, 8, 14, 0, 9, 7, 2];

for (let i = 0; i < number.length; i++) {
  number[i] *= 3;
}
console.table(number);

//Dada a matriz 2x3, escrever para o usuario todos os seus elementos
//com a respectivas posições da matriz:
//[8,4,1];
//[3,7,8].

var matriz = [
    [8,4,1],
    [3,7,8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[ ${linha},${coluna}] = ${matriz[linha][coluna]}`);
    }
}




