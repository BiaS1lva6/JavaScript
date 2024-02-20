//Operadores de incremento e decremento
var idade = 16;
console.log(idade);

idade++; //idade = idade + 1
console.log(idade);

idade--; // idade =  idade-1
console.log(idade);

console.log("----------------");

var novaIdade = idade++;
console.log("idade:", idade, "| Nova idade", novaIdade);

var novaIdade = ++idade;
console.log("idade:", idade, "| Nova idade:", novaIdade);


novaIdade += 10; //novaIdade = novaIdade
console.log(novaIdade);

novaIdade -= 20;
console.log(novaIdade);
