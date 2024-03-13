// //Definindo uma classe pessoa
// class Pessoa {
//   //class = objeto que quero criar
//   constructor(pNome, pIdade) {
//     //constroi oq tem em um objeto
//     //parametro que precisa pra funcionar
//     this.nome = pNome; //this = isso e esse
//     this.idade = pIdade;
//   } //metodo(função) é uma pessoa dentro da classe
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objetos de "tipo" pessoa
// var pessoa1 = new Pessoa("Talda Dienifer", 52); //todas as caracteristicas do objeto pessoa e "atribuir" para uma nova PESSOA
// var p2 = new Pessoa("Taldo Pedrin", 18);
// pessoa1.apresentarSe(); //chamada (estou chamando o var pessoa)
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// console.log(`----------------------abstração-----------------------------`);
// //abstração- ABSTRAIR CARACTERISTICAS IMPORTANTES E DESCATAR IRRELEVANTE

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.name = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// );

// meuPet.alimentar();

// console.log(`------------------Herança--------------------`); //herdar partes do codigo da super classe ou de algo
// class Animal {
//   constructor(nome, idade, tipoAlimetação) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimetação = tipoAlimetação;
//   }

//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }

//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }

// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O Cachorro ${this.nome} foi alimentado`);
//   }

//   emitirSom() {
//     console.log(`AU AU`);
//   }
// }
// const pet = new Animal("Carlos", 10, "Comida espacial");
// const meuCachorro = new Cachorro("Rex", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log("");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();

// console.log("-------------------Encapsulamento--------------------")
// //"proteger" algumas propriedades da classe para que elas não possam ser modificadas
// class Petzinho {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   getNome() {
//     return this.nome;
//   }

//   setNome(novoNome) {
//     this.nome = novoNome
//   }
// }

// const novoPetzinho =  new Petzinho("Bob", 3, "Cachorro");

// console.log(novoPetzinho.getNome()); //"Bob"
// novoPetzinho.setNome("Rex");
// console.log(novoPetzinho.getNome()); // "Rex"

// //objeto que pode ser tratado de diferentes
// console.log("--------------------Polimorfismo--------------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log(`-----------------------EXEMPLOS--------------------`);
//Criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura; //quando é somente um valor usamos return
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    //encapsulando o codigo para não ter que ficar trocando o valor de var
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}
//Criando um objeto do "tipo" Retângulo
const ret1 = new Retangulo(10, 15);

function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`área = ${retangulo.obterArea()}`); // () quando for um metodo
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}

displayRet(ret1);
ret1.setComprimento(20);
displayRet(ret1);
ret1.setLargura(20);
displayRet(ret1);
