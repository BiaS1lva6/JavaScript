function idade(ano) {
  return 2024 - ano;
}
console.log(`A clara tem ${idade(2010)} anos.`);

function quantidade(combustivel, lts) {
  return combustivel * lts;
}
console.log(
  `O carro de Claudia com 3 litro de combustivel pode percorrer ${quantidade(
    3,
    12
  )} km`
);

console.log(`-----------------atividade2---------------------------`);

function votar (idade) {
if (idade >= 16) console.log(`Voce tem idade para votar!`);
else console.log(`Você não pode votar`);
}
votar(10);

console.log(`----------------------copia professor----------------------`)
function votação(idade){
    switch (true) {
        case idade < 16:
            console.log(`Você não pode votar`);
            break;
        case idade >= 16 && idade < 18:
            console.log(`Você pode votar, mas não é obrigatorio`);
            break;
        default:
            console.log(`Você pode votar`);
            break;
    }
}
votação(30)



