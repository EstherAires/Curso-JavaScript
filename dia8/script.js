//Template Literals
//um modo avançado da concatenação

// let firstName = 'Morgan'
// let lastName = 'Bernamount'
// let age = 24

// //concatenação
// console.log(
//   'Olá, meu nome é ' +
//     firstName +
//     ' ' +
//     lastName +
//     'e eu tenho' +
//     age +
//     ' anos de idade'
// )

// //template literals
// console.log(
//   `Olá meu nome é ${firstName} ${lastName}, e tenho ${age} anos de idade`
// )

//
//
//

////////MÉTODOS EM STRINGS///////
///permitem a realização de operações como: busca, transformação e manipulação de dados em strings

// let texto = '   Estou aprendendo JavaScript   '
// console.log(texto.charAt(4)) //retorna a letra que está na posição(número) informada

// //O index sempre se inicia com 0

// //retorna um boolean informando se há ou não o texto informado presente na string
// console.log(texto.includes('JavaScript'))

// //retorna a posição de index da primeira ocorrência do valor informado
// console.log(texto.indexOf('aprendendo')) //retorna a posição de index da primeira ocorrência do valor informado

// //extrai uma pate da string e retorna uma nova string, sem modifica-la
// console.log(texto.slice(6, 16))

// //converte tudo para letra maiúcula
// console.log(texto.toUpperCase())

// //converte tudo para letra minuscula
// console.log(texto.toLowerCase())

// //remove espaços em branco, tanto no início como no final
// console.log(texto.trim())

// //quando é necessário repetir uma palavra, frase, string ou o conteúdo da string várias vezes
// console.log(texto.repeat(3))

// //quando você quer trocar uma palavra por algo diferente
// console.log(texto.replace('Estou', 'Eu estou'))

//
//
//

////////MÉTODOS EM NUMBERS////////
// let num1 = 3.3785

// console.log(num1)

// // informe o número específico de digitos que você após o ponto decimal
// console.log(num1.toFixed(2))

// //converte pa string, mas também é possível fornecer base para conversão
// //numérica de diferentes bases binary (base 2), octal (base 8), and hexadecimal (base 16).
// console.log(num1.toString(2))

//
//
//

// ////////MÉTODOS MATEMÁTICOS (Math)////////
// let num1 = 2

// //faz o arredondament para tranformar o número em um inteiro >=5 arreronda pra cima <5 arredonda pra baixo
// console.log(Math.round(num1))

// //sempre vai arredondar para cima
// console.log(Math.ceil(num1))

// //sempre vai arredondar para baixo
// console.log(Math.floor(num1))

// //raiz quadrada
// console.log(Math.sqrt(num1))

// //potenciação
// console.log(Math.pow(num1, 3))

// //valor absoluto
// console.log(Math.abs(num1))

// //gerar números randômicos de 0.00 até 0.99
// console.log(Math.random())

// //gerando de 1 a 10
// console.log(Math.round(Math.random() * 10 + 1))

// let sequencia = [1, 56, 41, 89, 23]

// //retorna o maior número
// console.log(Math.max(...sequencia))

// //retornar o menor número
// console.log(Math.min(...sequencia))

//
//
//

////////OBJETOS (MULTIPLOS VALORES)////////

//Objetos Literais:
// Podem ser definidos usando chaves {} com pares de chave-valor.

// let car = {
//   carName: 'Cybertruck',
//   carRange: 340,
//   carMaxSpeed: 112,
//   carHorsePower: 600,
// }

// console.log(car)

// //Chaves Dinâmicas: Quando uma chave precisa ser dinâmica ou baseada
// // em uma variável, podemos usar a sintaxe de colchetes ([]).

// let chaveDinamica = 'nome'
// let objeto = {
//   [chaveDinamica]: 'Ana',
// }

// console.log(objeto)
