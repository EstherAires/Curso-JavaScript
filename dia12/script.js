////////CONCATENAÇÃO DE ARRAYS

// let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 13, true]

// //Colocando apenas os elementos de numbers dentro da array cart

// let y
// y = cart.concat(numbers)
// console.log(y)

//com a concatenação, é possível colocar os itens de um array em outro array, assim concatemando as duas
//já com o aninhamento, uma array é adicionada dentro de outra array, ficando assim com os elementos dela mais o array que foi aninhado a ela

//
//
//
//

////////MÉTODOS ESTÁTICOS
//Array pode ser criado de forma automática, adicionando os valores de variáveis dentro de um array

// let num1 = 10
// let num2 = 20
// let num3 = 30
// let allNumbers = Array.of(num1, num2, num3)
// console.log(allNumbers)

// //array pode ser criado de forma automaticamente a partir de uma string
// let y
// y = Array.from('borboleta')//[10, 20, 30]
// console.log(y)// ['b', 'o', 'r', 'b', 'o', 'l', 'e', 't', 'a']

//
//
//
//

////////CRIANDO Nested Arrays

//possibilidade de criar uma array dentro de outra array

// let numbers = [10, 11, 12, [20, 21, 22], 30, 31, 32, [40, 41, 42]]
// console.log(numbers)

// //deixamos todos os elementos em penas uma array
// let y = numbers.flat()
// console.log(y

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let element = matrix[1][2] //// Acessa o elemento na segunda linha e terceira coluna, resultando em 6

console.log(element)
