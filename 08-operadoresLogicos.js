//Opearadores Lógicos
var manha = true;
var sono = true;

console.log("-----------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

console.log("Operador AND (E):", manha && sono); //comparando se é de manha E estou com sono 
console.log("Operador OR (OU):", manha || sono); //comparando se é de manha OU estou com sono

sono = false
console.log("-------------------------------");
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

manha = false
console.log("-------------------------------");
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);