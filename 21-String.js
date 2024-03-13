//Variaveis de tipo string (Texto)
var texto = "Ola, eu sou um texto";
console.log(texto);

//Concatenação de strings
var texto1 = "Olá, ";
var texto2 = "eu sou um texto";
var texto3 = texto1 + texto2;
console.log(texto3);

texto1 += texto2;
console.log(texto1);

//Tamanho da string
var texto4 = "Ola, meu nome é Beatrizcu!";
console.log(`Tamanho do texto: ${texto4.length} caracteres!`);

//Caracteres de escape
var texto5 = 'Olá, meu nome é "Beatriz"!';
console.log(texto5);

var texto6 = "Quebra de linha \noutralinha";
console.log(texto6);
var texto7 = "Tubulação \toutra tubulação";
console.log(texto7);

//Obtendo partes de uma string (Metodo substring)
var texto8 = "O esperto rato, perplexo ficou frente ao aparato";
var sub = texto8.substring(16, 24); //posiçao onde começa e onde termina
console.log(sub);
var sub2 = texto8.substr(10, 4); //posiçao onde começa e quantos caracteres
console.log(sub2);

//Substituir partes de uma string (Metodo replace)
var texto9 = "O rato roeu a roupa do rei de roma!";
var novoTexto = texto9.replace("rato", "COELHO");
console.log(texto9);
console.log(novoTexto);

//Maiúsculas e minúsculas (Metodo toUpperCase e toLowerCase)
var texto10 = "O rato roeu a roupa do REI de Roma!";
console.log(texto10.toLocaleUpperCase());
console.log(texto10.toLowerCase());

//limpando espaços em branco (Método trim)
var texto11 = "     Texto aqui no meio      ";
console.log(`******`, texto11, `******`);
console.log(`******`, texto11.trim(), `******`);

//Buscando a posição de uma string (Metodo indexOf)
var texto12 = `O rato roeu a roupa do rato de Roma!`;

var posicao = texto12.indexOf("rato");
var ultimaPosicao = texto12.lastIndexOf("rato");
console.log(
  `Primeira Ocorrencia: ${posicao} - Ultima Ocorrencia ${ultimaPosicao}`
);

//Dividindo uma string em partes (Metodo split)
var texto13 = "O rato roeu a roupa do rei de Roma!";
var palavras = texto13.split(" ");
console.log(palavras);

var chaveAcesso = "1234-5678-9012-3456";
var partes = chaveAcesso.split("-");
console.table(partes);