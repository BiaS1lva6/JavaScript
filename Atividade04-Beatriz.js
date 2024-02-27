var matriz = [
  [7, 8, 9],
  [9, 2, 3],
  [5, 7, 4],
];
console.table(matriz);

console.log("Primeira diagonal:", matriz[0][0], matriz[1][1], matriz[2][2]);
console.log("Segunda diagonal:", matriz[2][2], matriz[1][1], matriz[0][0]);
console.log("Terceira diagonal:", matriz[0][2], matriz[1][1], matriz[2][0]);
console.log("Quarta diagonal:", matriz[2][0], matriz[1][1], matriz[0][2]);

console.log("----------------------------------------------------------");
console.log("");
var usuario = [
  "Beatriz Nascimento",
  16,
  "Azul",
  "Morango",
  "José de Oliveira Coelho n40",
  "leonardo da vinci silva",
];

console.log("Olá", usuario[0], "! Seja bem-vindo ao nosso sistetma.");
console.log("Você mora no endereço", usuario[4], ", e tem um pet chamado", usuario[5]);
console.log("Sua idade é", usuario[1], "e gosta muito da fruta", usuario[3]);
console.log("Sua cor favorita é", usuario[2]);
