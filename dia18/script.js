//Objectis e Key Pairs (Dictionary)
//Diferença de array e objeto

//Array
ouraInfo = [9.7, 7.53, '86%', 59, 84]

//Objeto (Dicionário) -> Mais organizado e legível
const ouraMerithInfo = {
  totalSleep: 7.53,
  timeInBed: 9.7,
  sleepEfficiency: '86%',
  restingHeatRate: 59,
  sleepScore: 84,
}

//ACESSANDO PROPRIEDADES DE UM OBJETO
console.log(ouraMerithInfo)

//Acessando uma propriedade em específico
console.log(ouraMerithInfo.totalSleep)
//  ou xolocar entre colchetes, como se acessasse o index de cada propriedade.
//    Colocamos a propriadade entre aspas simples, para que o JS entenda que é uma propriedade e não uma variável.
console.log(ouraMerithInfo['totalSleep'])

//Adicionando uma nova propriedade
ouraMerithInfo.remSleep = '2h15m'
console.log(ouraMerithInfo)

//Atualizando uma propriedade
ouraMerithInfo.sleepScore = 90
console.log(ouraMerithInfo.sleepScore)

ouraMerithInfo['sleepScore'] = 94
console.log(ouraMerithInfo.sleepScore)

ouraMerithInfo.sleepScore++
console.log(ouraMerithInfo.sleepScore)

ouraMerithInfo.sleepScore += 2
console.log(ouraMerithInfo.sleepScore)

//Aninhamento de objetos
console.log('ANINHAMENTO DE OBJETOS')
const ouraMerithInfo2 = {
  totalSleep: 7.53,
  timeInBed: 9.7,
  sleepEfficiency: '86%',
  restingHeatRate: {
    maxHeartRate: 81,
    minHeartRate: 59,
  },
  sleepScore: 84,
  //array dentro de objetos
  notes: ['Coffe', '30 Minutes reading'],
}

//acesando propriedades aninhadas
console.log(ouraMerithInfo2.restingHeatRate.minHeartRate)
console.log(ouraMerithInfo2.restingHeatRate['minHeartRate'])
//acessando array dentro de objeto
console.log(ouraMerithInfo2.notes[0])
