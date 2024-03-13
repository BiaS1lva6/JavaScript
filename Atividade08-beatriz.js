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
