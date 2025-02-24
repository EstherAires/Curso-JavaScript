//DESAFIO OPERADOR TERNARIO

/* operador ternário é uma forma concisa de escrever uma instrução if-else. Sua sintaxe é condição ? expressão1 : expressão2.

Se a condição for verdadeira, expressão1 é executada. Se for falsa, expressão2 é executada.*/

let nota = 85

// let avaliacao

// if (nota >= 90){
//   avaliacao = 'Excelente'
// } else if (nota >= 70){
//   avaliacao = 'Bom'
// } else if (nota >= 50) {
//   avaliacao = 'Satisfatório'
// } else {
//   avaliacao = 'Insatisfatório'
// }

// console.log(avaliacao)

nota >= 90
  ? console.log(`Excelente`)
  : nota >= 70
  ? console.log(`Bom`)
  : nota >= 50
  ? console.log(`Satisfatório`)
  : console.log(`Insatisfatório`)
