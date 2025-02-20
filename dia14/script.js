//IF e ELSE com operadores lógicos (&&E, || OU)

//EXEMPLO 1

//Criar um site de evento online.
//Verificar se ela possui idade >=18
//Verificar de ela está registrada no site
//registro = true

//MINHA SOLUÇÃO

// let cadastro = {
//   nome: ['Ana', 'Gustavo', 'Arthur', 'Maria', 'Erika'],
//   idade: [18, 23, 25, 56, 89],
// }

// let pessoa = {
//   nome: 'Gustavo',
//   idade: 23,
// }

// for (let i = 0; i < cadastro.nome.length; i++) {
//   if (cadastro.idade[i] >= 18) {
//     if (cadastro.nome[i] == pessoa.nome && cadastro.idade[i] == pessoa.idade) {
//       console.log(`${cadastro.nome[i]} está cadastrado`)
//     }
//   } else {
//     console.log(
//       `${cadastro.nome[i]} não possui idade suficiente para estar cadastrado`
//     )
//   }
// }

//
//
//
//

//SOLUÇÃO DO PROFESSOR
// let idadeParticipante = 20
// let registroOnline = true

// if (idadeParticipante >= 18 && registroOnline == true) {
//   console.log('Bem vindo ao evendo')
// } else {
//   console.log('Você precisa ter no mínimo 18 anos e estar registrado no evento')
// }

//EXEMPLO 2

//App onde o candidato vai receber um desconto
//se for estudante ou tiver um cupom de desconto

//MINHA SOLUÇÃO FOI A MESMA QUE A DO PROFESSOR
// let estudante = false
// let cupom = false

// if (estudante == true || cupom == true) {
//   console.log(`Você tem acesso a promoção especial`)
// } else {
//   console.log(
//     `Você precisa ter um cupom ou ser estudante para ter acesso a promoção especial`
//   )
// }

//EXEMPLO 3

// App para restaurante que oferece desconto para famílias com mais de 4 pessoas
//e venham para almoçar na terça/quarta

// familia = 4
// diaDaSemana = 'terça'

// if (familia >= 4 && (diaDaSemana === 'terça' || diaDaSemana === 'quarta')) {
//   console.log(`Parabens! Sua família ganhou um desconto especial.`)
// } else {
//   console.log(`Não atende aos requisitos para receber o desconto`)
// }

///ANINHAMENTO DE IF e ELSE

/* Aplicativo de análise e jogo
nivel = true
 >= 90 - ouro
 >=75 - prata
 <75 - bronze

 nivel = false
 você tem que terminar o nível primeiro
*/

let nivel = true
let pts = Math.round(Math.random() * 100) + 1

if (nivel == true) {
  console.log(`Pontuação do nível: ${pts}`)
  if (pts >= 90) {
    console.log(`Com sua pontuação você alcançou o rank ouro`)
  } else if (pts >= 75) {
    console.log(`Com sua pontuação você alcançou o rank prata`)
  } else if (pts < 75) {
    console.log(`Com sua pontuação você alcançou o rank bronze`)
  }
} else {
  console.log(`Você precisa terminar o nível primeiro`)
}
