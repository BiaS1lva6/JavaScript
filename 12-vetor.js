const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

//Criando variaveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log(""); // pulando linha
console.table(dinos); //cria tabelas com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//adicionando elementos ao vetor existente
dinos.push("Brontossauro"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Triceratops"); //adiciona item no inicio do array
console.table(dinos);

//Alterando elementos com base no indice(posicao)
dinos[3] = "Titanossauro";
console.table(dinos);

//Obtendo um elemento com base em seu indice
console.log("Primeira posição:", dinos[0]); //retorna um elemento especifico
console.log("Segunda posição:", dinos[1]);
console.log("Item de posição 20:", dinos[19]); //retorna indefinidp

//Removendo elemento do vetor
dinos.pop(); //remove o ultimo elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1.
console.table(dinos);

console.log("");
console.log("----------Continuação Aula-----------");
var dinos = [
    "Triceratops",
    "Tiranossauro Rex",
    "Estegossauro",
    "Anquilossauro",
    "Brontossauro",
    "Ictiossauro",
    "Pterodactilo",
    "Espinossauro",
];

console.log(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está o indíce " + posicao);

var elementoProcurado = "Pterodactilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está o indíce " + posicao);

var elementoProcurado = "Triceratops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está o indíce " + posicao);

//criando cópia de array (vetor)
var copia1 = dinos.slice();
console.log("Vetor copia 1");
console.table(copia1);

var copia2 = dinos.slice(1, 3);
console.log("Vetor copia 2");
console.table(copia2);

