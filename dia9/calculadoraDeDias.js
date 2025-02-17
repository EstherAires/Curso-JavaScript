//Data e Hora (Date)
//Criar um contador de dias para uma data específica
//há uma data início e uma data fim
//Mostrar a diferença de dias entre essas datas

let inicio = new Date('2023/10/15')
console.log(inicio)

let fim = new Date('2024/11/15')
console.log(fim)

//convertemos milissegundos para horas e entçao para dias
//1000 * 3600        -> contador de horas
//1000 * 3600 * 24   -> contador de dias
let diferenca = (fim - inicio) / (1000 * 3600 * 24)
console.log(diferenca)
