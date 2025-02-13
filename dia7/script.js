/////OPERADORES DE COMPARAÇÃO/////

// //Igualdade solta (dado)
// console.log(3 == '3')

// //Igualdade Estrita (dado e tipo)
// console.log(3 === '3')

// //Desigualdade solta (dado)
// console.log(3 != 3)

// //Desigualdade Estrita (dado e tipo)
// console.log('3' !== 3)

// console.log(8 > 5) //Maior que
// console.log(8 < 5) //Menor que
// console.log(5 >= 5) //Maior igual
// console.log(5 <= 5) // Menor igual

/////COERÇÃO DE TIPO/////
//Atribuição forçada de tipo

let total
total = 3 + '5' // converte para string e realiza concatenação
total = '5' - '3' // quando subtração, há a converção automática para o tipo number
total = '5' * '4' // converte para number
total = '5' / '4' // converte para number

console.log(total)

/////CONCATENAÇÃO DE STRINGS/////

let firstName = 'Andre'
let lastName = 'Iacono'

// fullName = firstName + lastName
// console.log(fullName)

// console.log(firstName + ' ' + lastName)

//concatenação automática
console.log(firstName, lastName)
