/*
Se a pontuação for 90nou mais, será ecibido "Excelente".
Se for 75 ou mais (mas menos que 90), será "Muito bom"
Para pontuações infetiores a 75, será "VocÊ pode melhorar"
*/

let pontuacao
pontuacao = 74

if (pontuacao >= 90) {
  console.log('Exelente')
} else if (pontuacao >= 75 && pontuacao < 90) {
  console.log('Muito Bom')
} else {
  console.log('Você pode melhorar')
}
