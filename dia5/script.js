//fORMATO DE LINGUAGEM UTILIZADA NO JAVA SCRIPT

////////////Static ou Dynamic////////////

//Static
//C, C++, Java, TypeScript
//Vantagem:
//É possível detectar erros rapidamente pois já é avisado
//Desvantagem:
//Menor flexibilidade em comparação a outras dinamicas,
// o que faz que haja mais demora para a finalização do código
// let lastName: string = 'Iacono'

// Dynamic
//O JS é dynamic. Ele pode autodetectar o que está sendo figitado,
//qual o tipo de dado e de forma dinamica ele associa o tipo à variável
//Pythin, JavaScript, Ruby, PHP
//Vantagem:
//Há maior flexibilidade, só que é possível errar muito da dinâmica
// let firstName = 'Andre'
// let age = 35

/////////////Convertions ou Casting////////////

/////String para numero////

// let age = '35.2'
// console.log(age, typeof age)

// //ParseInt(inteiro)
// age = parseInt(age)
// console.log(age, typeof age)

// // ParseFloat (fracionario)
// age = parseFloat(age)
// console.log(age, typeof age)

//Unário (+)
// age = +age
// console.log(age, typeof age)

// //Number(numero)
// age = Number(age)
// console.log(age, typeof age)

////Number para string////

let age = 35.6

////(utilizando método toString)
// age = age.toString()

////(utilizando construtor String)
// age = String(age)

////
console.log(age, typeof age)
