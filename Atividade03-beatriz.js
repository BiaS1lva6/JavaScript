//ex1
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

//ex2
frutas.push("Tangerina");
console.table(frutas);

//ex3
frutas.unshift("Goiaba");
console.table(frutas);

//ex4
console.log(frutas[5]);

//05- Excluir Uva
//frutas.splice(4,1)

var position = frutas.indexOf("Uva");
console.log(position);
frutas.splice(position, 1);
console.table(frutas);

//ex6
var copia = frutas.slice(2, 5);
console.table(copia);

//Segunda lista de exercicios
console.log("");
console.log("------------lista de exescicio--------");

//ex1
var numerosOriginais = [1, 2, 3, 4, 5];
console.table(numerosOriginais);

//ex2
console.log("O terceiro elemento é o número " + numerosOriginais[2]);

//ex3
var copiaNumber = numerosOriginais.slice();
console.table(copiaNumber);

//ex4
copiaNumber[0] = numerosOriginais[0] * 2;
copiaNumber[1] = numerosOriginais[1] * 2;
copiaNumber[2] = numerosOriginais[2] * 2;
copiaNumber[3] = numerosOriginais[3] * 2;
copiaNumber[4] = numerosOriginais[4] * 2;
console.table(copiaNumber);


