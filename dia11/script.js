////////MÉTODOS DE UMA ARRAY////////

// let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 13]

// //adicionar item ao final da lista
// cart.push('Suco')
// console.log(cart)

// //remover ultimo elemento de uma array
// cart.pop()
// console.log(cart)

// //remove primeiro item da array
// cart.shift()
// console.log(cart)

// //Vai adicionar um item ao início do array
// cart.unshift('Suco')
// console.log(cart)

// //organizar lista em ordem alfabética
// cart.sort()
// console.log(cart)

//mostra se determinado falor existe dentro da array (é case sensitive)
// let y = cart.includes('Arroz')
// console.log(y)

//mostra o índice do item no array
// let y = cart.indexOf('Arroz')
// console.log(y)

//tira uma porção do array e retorna a console, mas o array permanece intacto
//caso apenas um número seja informado, ele mostrará todos os itens a partir do índice informado
//caso dois números sejam informado, um será referente ao índice início e o segundo ao índice fim
//    apesar de inculir o item no primeiro índice informado, ele não ira apresentar o item presente do índice fim
// let y = cart.slice(1, 3)
// console.log(y)

//retira uma porção do array e retorna a console, mas o array é alterado
//caso apenas um número seja informado, ele mostrará todos os itens a partir do índice informado
//caso dois números sejam informado, um será referente ao índice início e o segundo ao índice fim
// //    incui os itens do primeiro ao último indice informado
// let y = cart.splice(1, 2)
// console.log(y)
// console.log(cart)

// let y = cart.slice(1, 3)
// console.log(y)
// console.log(cart)

//
//
//

//REALIZANDO CHAIN COM MÉTODOS
//chain

// let y = cart.splice(1, 3).reverse().toString().includes('Carne')
// console.log(y)

// slice é usado para obter ['Orange', 'Lemon'], e map é imediatamente aplicado
// para converter cada elemento para maiúsculas,
// resultando em ['ORANGE', 'LEMON']
// let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// let citrus = fruits.slice(1, 3).map((fruit) => fruit.toUpperCase())
// console.log(citrus)

//ANINHAMENTO DE ARRAYS (nesting)

// let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 13]
// let cartNumbers = [cart, numbers]

// console.log(cartNumbers)
// y = cartNumbers[0][1] //imprime carne
// y = cartNumbers[1][3] //imprime 40
// console.log(y)

// cart.push(numbers)
// console.log(cart)

// let y
// let x

// y = cart[1] //vai acessar o elemento no index 1: carne
// x = cart[4][1] //vai acessar o elemento 4(que é um array) e dentro do elemento 4 vai acessar o elemento 1: numero 20
// console.log(y)
// console.log(x)

// slice é usado dentro de splice para multiplicar o segundo elemento do array
// numbers por 10 e então substituí-lo no índice 2 do array original.
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
let modifiedNumbers = numbers.splice(2, 1, numbers.slice(1, 2)[0] * 10)
console.log(numbers)
console.log(modifiedNumbers)
