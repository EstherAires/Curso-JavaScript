//Aninhamento de funções

function saudacao(nome) {
  function mensagem() {
    console.log(`Olá, ${nome}`)
  }
  return mensagem()
}

saudacao('Meyrith')

//Criar um app para gerar 6  números da mega-sena
console.log('----------------------------------------------')
console.log('Gerador de números da Mega-Sena')
function gerarNumero() {
  console.log(Math.floor(Math.random() * 60)) + 1
}

function rodarSorteio() {
  for (let i = 0; i < 6; i++) {
    gerarNumero()
  }
}

rodarSorteio()

//Function Declaration (associa o nome)
console.log('----------------------------------------------')
console.log('Function Declaration')

function somar(n1, n2) {
  return n1 + n2
}
console.log(somar(10, 20))

//Function Expression (quando atribuímos uma função a uma variável)
console.log('----------------------------------------------')
console.log('Function Expression')

const subtrair = function(n1, n2) {
  return n1 - n2
}
console.log(subtrair(10, 5))

//Arrow Function implicity Return
console.log('----------------------------------------------')
console.log('Arrow Function')

const subtrair1 = (n1, n2) => n1 - n2
console.log(subtrair1(10, 5))

//Arrow Function implicity Return
console.log('----------------------------------------------')
console.log('Arrow Function')

const multiplicar = (n1, n2) => {
  return n1 * n2
}
console.log(multiplicar(10, 5))