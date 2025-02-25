//Functions - FUNÇÕES
//organizar o código em blocos
//reutilizar o código

//declaramos a função informando os parâmetros
function somar(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`)
}

//puxamos a fumcpai
somar(10, 4)

////parametros padrão
//vai fazer uso do parâmetro padrão, mas caso ele seja informado, puxará o valor informado
function calcularTotal(preco, desconto = 0.1) {
  let valorDesconto = preco * desconto
  let totalCompra = preco - valorDesconto
  return totalCompra
}

console.log(calcularTotal(100))

//parametros Rest
//quando não sabemos quantos parâmetros serão informados
function listadeCompras(...itens) {
  console.log(itens)
}

listadeCompras('banana', 'maçã', 'uva', 'laranja', 'melancia')

function somar(...numeros) {
  return numeros.reduce((total, atual) => total + atual, 0)
}

console.log(somar(10, 20, 30, 40, 50))
