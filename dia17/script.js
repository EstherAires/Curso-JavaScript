/*/////Truthy e Falsy (IF ELSE, Loop, Ope Lógicos)

let texto = 'Merith' // Truthy
// let texto = '' // Falsy 

if (texto) {
  console.log(`Existe um texto`)
} else {
  console.log(`Não existe um texto`)
}

// let n = 0 // Falsy
// let n = 1 // Truthy


/*O JS vai fazer uma decisão booleana dependendo do valor adicionado na variável */

//classificados como falsy
// 0, null, undefined, NaN, '' // Falsy

//classificados como truthy,
//precsa possuir conteúdo

//DOCUMENTACAO
// truthy
//https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// falsy
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy*/
//

/////OPERADOR TERNÁRIO

let idade = 19;

// if(idade < 18){
//   console.log('Menor de idade')
// }else{
//   console.log('Maior de idade')
// }

// let resultado = idade < 18 ? 'Menor' : 'Maior'
// console.log(resultado)

idade < 18 ? console.log('Menor') : console.log('Maior')

