// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de
//ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se
// como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = anoNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.anoNascimento;
  }
  apresentar() {
    console.log(
      `O aluno ${this.nome} com o ra ${
        this.ra
      } que tem ${this.calcularIdade()} anos e está cursando ${this.curso}`
    );
  }
}

const aluno1 = new Aluno(4503, "Beatriz", 2007, "Desenvolvimento de sistemas");
aluno1.apresentar();

//Crie e ultilize uma classa "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
//Crie um sorvete de morango grande
//Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  sabores() {
    console.log(
      `O sabor do sorvete é ${this.sabor} tamanho ${this.tamanho} no valor de: ${this.getPreco()} reais`
    );
  }
  getPreco(){ //proteção (encapsulando)
    return this.preco;
  }
  setValor(novopreco) {
    this.preco = novopreco;
  }
}
const Sorvete1 = new Sorvete("morango", 10, "G");
Sorvete1.sabores();

const Sorvete2 = new Sorvete("chocolate", 6, "P");
Sorvete2.sabores();

const Sorvete3 = new Sorvete("melancia", 8, "M");
Sorvete3.sabores();

Sorvete1.setValor(10.51);
Sorvete1.sabores();


//1.Comparação de strings (sem case sensitive):
//Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).
console.log("------------------ex1-----------------------");

class comparando { 
  constructor(string1, string2) {
    this.string1 = string1.toLowerCase()
    this.string2 = string2.toLowerCase()
}

apresentando() {
  return this.string1 === this.string2;
} 
}
const comparacao = new comparando("Olá", "oi");
console.log(comparacao.apresentando());


//2.Extrair números de uma string:
//Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.
console.log("-----------ex2--------------")
function extraindoN(string) {
  const number = /\d+/g;
  const numeros = string.match(number);
  return numeros ? numeros.map(Number) : [];
}

const string = "Tenho 4 gatos e 1 tartaruga .";
console.log(extraindoN(string)); 

//3.Inverter a ordem das palavras em uma frase: Desenvolva uma função em JavaScript que //recebe uma frase e retorna uma nova string com a ordem das palavras invertida.
console.log("----------------ex3--------------");
class inversordeordem {
  constructor(frase) {
    this.frase = frase;
  }

  inverterOrdem() {
    const palavras = this.frase.split(" ");
    const ordemInvertida = palavras.reverse();
    return ordemInvertida.join(" ");
  }
}

const inversor = new inversordeordem("O gato faz o miau");
console.log(inversor.inverterOrdem()); 

