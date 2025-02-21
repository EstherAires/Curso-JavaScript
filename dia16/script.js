//PRECEDÊNCIA DOS OPERADORES

//se aplica aos operadores matemáticos
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// let operacao = (3 + 4) * 5
// console.log(`(3 + 4) * 5 = ${operacao}`)

// let n1 = 5

// if ((n1 == 5 || n1 === 3) && n1 > 8) {
//   console.log('Resultado correto')
// }else {
//   console.log('Errado')
// }


/*
Parênteses (): Altera a precedência natural dos operadores.

Membro ., Membro com colchetes []

Chamadas de Função (), Novo com argumentos new Func()

Postfix Increment ++, Postfix Decrement --

Lógico NOT !, Bitwise NOT ~, Unary Plus +, Unary Negation -, Prefix Increment ++, Prefix Decrement --, Tipo de typeof, Void void, Delete delete, Novo sem argumentos new

Exponenciação **

Multiplicação *, Divisão /, Módulo %

Adição +, Subtração -

Bitwise Shift Left <<, Bitwise Shift Right >>, Unsigned Bitwise Shift Right >>>

Menor que <, Menor ou igual <=, Maior que >, Maior ou igual >=, in, instanceof

Igualdade ==, Inigualdade !=, Estrita Igualdade ===, Estrita Inigualdade !==

Bitwise AND &

Bitwise XOR ^

Bitwise OR |

Lógico AND &&

Lógico OR ||

Condicional ? : (Operador Ternário)

Atribuição =, +=, -=, *=, /=, %=, **=, &=, |=, ^=, <<=, >>=, >>>=

Yield yield, Yield yield**

Spread ...

 */

//O SWITCH E CASE
//se utiliza quando há uma váriável ou uma expressão que deve ser comparada
//com um valor ou outros valores

//dia1 é domingo
// let dia = 5

// switch (dia) {
//   case 1:
//     console.log('Domingo')
//     break
//   case 2:
//     console.log('Segunda')
//     break
//   case 3:
//     console.log('Terça')
//     break
//   case 4:
//     console.log('Quarta')
//     break
//   case 5:
//     console.log('Quinta')
//     break
//   case 6:
//     console.log('Sexta')
//     break
//   case 7:
//     console.log('Sábado')
//     break
//   default:
//     console.log('Dia inválido')
//     break
// }

//Switch e case com string
//nível do usuário no sistema

// let nivel = 'administrador' //administrador, editor, visitante

// switch (nivel) {
//   case 'administrador':
//     console.log('Acesso total')
//     break
//   case 'editor':
//     console.log('Níel de edição')
//     break
//   case 'visitante':
//     console.log('Acesso limitado')
//     break
//   default:
//     console.log('Acesso negado')
//     break
// }

//Retornando a hora

/*
Criar uma solução com switch que retorne:
hora <12 - Bom dia
hora >12 && hora <18 - Boa tarde
hora >18 - Boa noite
A horea deve ser coletada do sistema local
*/

let data = new Date()
let hora = data.getHours()

switch (true) {
  case hora < 12:
    console.log(`Bom dia, agora são ${hora} horas`)
    break
  case hora > 11 && hora < 18:
    console.log(`Boa tarde, agora são ${hora} horas`)
    break
  case hora > 18:
    console.log(`Boa noite, agora são ${hora} horas`)
    break
  default:
    console.log('Hora inválida')
    break
}
