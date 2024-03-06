let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}
// While testa a condição antes de entrar no laço de repetição.
// Se a condição for iniciualmente falsa, o laço não é executado nenhuma vez.
var x = 20;
while (x > 10) {
  console.log(`Entre no laço While...`);
  x--;
}
console.log(`Terminei!`);

//Contagem regressiva
let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Lançamento!");

//Estourando o limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100; //Math.random() cria valor aleatorio entre 0 e 1
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
    //toFixed alterar o valor mostrado para o usuario em duas casas depois da virgula.
  );
  fatura > limite && console.log(`Estourou o limite do cartão`);
  //&& faz somente um IF, sem else.
}

//Estourando o limite do cartão -  versão do while

console.log("------------------------------------------------------");
var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
    //toFixed alterar o valor mostrado para o usuario em duas casas depois da virgula.
  );
  fatura > limite && console.log(`Estourou o limite do cartão`);
} while (fatura <= limite);
  
