var nome = "Ana Clara";
var banco = "Itau";
var agencia = 5737;
var conta = 849493;
var saldo = 15000;
console.log("Seja bem vindo", nome, "A sua conta do", banco);
console.log("seu numero da agencia é:", agencia);
console.log("Dados da sua conta:", conta);
console.log("Saldo disponivel em conta: R$", saldo);

saldo += 1000;
console.log("Você recebeu um Pix de: R$", 1000);
saldo += 200;
console.log("Você recebou uma tranferencia de: R$", 200);
saldo += 300;
console.log("Você depositou: R$", 300);
saldo -= 250;
console.log("Compra da SHEIN efetuada: R$", 250);
saldo -= 100;
console.log("Você realizou um pix de: R$", 100);

console.log("salda total é de: R$", saldo);
