//Data Types (primitirve - relative)

//Pirimitive Data Types -
/// São os tipos de dados mais básicos da linguagem e têm a característica de serem imutáveis.
/// Quando você manipula um valor primitivo, você está criando um novo valor.

//String
let firstName = 'Andre'
console.log(firstName, typeof firstName)

// Number
let age = 35
console.log(age, typeof age)

// Boolean
// Tem dois valores possíveis, true ou false, usado para lógicas de verdadeiro ou falso.
let isAdult = false

// Null - valor zerado
//Representa a intencional ausência de valor de objeto.
let address = null
console.log(address, typeof address)

// Undefined - não é um valor
//A variável foi declarada mas ainda não foi atribuída nenhum valor a ela
let color
console.log(color, typeof color)

// Symbol
//Representa um valor primitivo único e é imutável.
//representa valores únicos que não são iguais a nenhum outro valor
let id = Symbol('id')
let meuObjeto = {
  [id]: 123456,
}
console.log(meuObjeto[id])

//BigInt
// Para números inteiros muito grandes (maior q 2^53) que o tipo Number não pode representar.
let huge = BigInt(9007199254740991)
console.log(huge, typeof huge)

/////////////////////////////

//Data Types
//Reference Data Types
// Ao contrário dos tipos primitivos, os dados de referência (ou objetos) são coleções de propriedades,
// e ao manipular esses dados, você está trabalhando com referências a um espaço na memória onde esses
//dados estão armazenados.

//Objetos
//Coleções de pares chave-valor
let pessoa = { nome: 'Joao', idade: 30 }

//Arrays
//Lista de itens dentro de uma variável
let numbers = [12, 35, 50, 69]
console.log(numbers)

//Funções
//Blocos de código reutilizáveis
function myName() {
  console.log('Andre')
}
console.log(myName, typeof myName)

//Date
//usada para verificar a data no local do sistema
let now = new Date()
console.log(now)
