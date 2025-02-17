// ///////DATA E HORA (Date)

// // //lançar data e hora local

// // let agora = Date()

// // console.log(agora)

// // //forçando uma data específica (ano, mês, dia, hora, minuto, segundo)
// // //é sempre uma boa prática começar com -new-, pois Date é um objeto
// // //janeiro[0]

// // let dataEspecifica = new Date(2024, 5, 23, 10, 35, 3)

// // console.log(dataEspecifica)

// // //passando data como string

// // let dataString = new Date('2024/10/20 10:35:00')
// // console.log(dataString)

// // //DATA E HORA (Date) MÉTODOS

// // let data = new Date()

// // //getDate -> mostra o dia do mês
// // console.log(data.getDate())

// // //obter o dia da semana 0 é domingo
// // console.log(data.getDay())

// // //Obter o mês 0 é janeiro
// // console.log(data.getMonth())

// // //obter ano
// // console.log(data.getFullYear())

// // //obser hora, minutos, segundos, milisegundos
// // console.log(data.getHours())
// // console.log(data.getMinutes())
// // console.log(data.getSeconds())
// // console.log(data.getMilliseconds())

// //
// //
// //
// //
// //

// ///////CONFIGURANDO MÉTODOS DATE

// //DATA E HORA (Date)

// //lançar data e hora local

// let agora = Date()

// console.log(agora)

// //DATA E HORA (Date) MÉTODOS

// let data = new Date()

// //consigurando o dia do mês
// data.setDate(9)
// //getDate -> mostra o dia do mês
// console.log(data.getDate())

// //não é possível alterar o dia da semana
// //obter o dia da semana 0 é domingo
// console.log(data.getDay())

// //configurando o mês
// data.setMonth(2)
// //Obter o mês 0 é janeiro
// console.log(data.getMonth())

// //configurado ano
// data.setFullYear(2004)
// //obter ano
// console.log(data.getFullYear())

// //obser hora, minutos, segundos, milisegundos
// console.log(data.getHours())
// console.log(data.getMinutes())
// console.log(data.getSeconds())
// console.log(data.getMilliseconds())

// //Para capturar utiliza-se o get
// //Para configurar/altera utiliza-se o set

//////ALTETRANDO A DATA ISO PARA Date
////Date e Hora(ate) Idioma
//BR (DD-MM-AAAA) US (MM-DD-AAAA)
//formatando data para o formato de data do local em que a pessoa está

//utilizaremps um construtor de objetos que nos premite fazer a formatação de idioma
let data
data = Intl.DateTimeFormat('en-US').format(data)
console.log(data)
//para saber qual código colocar referente ao país, basta pesquisar por
// iso language code table
