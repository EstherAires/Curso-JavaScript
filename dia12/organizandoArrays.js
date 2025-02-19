/*Criar uma solução onde a lista NUM1 e Num2 são mescladas,
corrigidas e organizadas*/

let num1 = [10, 20, 30, 40, 50]
let num2 = [90, 80, 70, 60, 50]

num2.sort() //orcanizamos o array em ordem crescente
num2.shift() //retiramos o primeiro elemento do array
sequencia = num1.concat(num2) //concatenamos o primeiro array com o segundo
console.log(sequencia)
//print[10, 20, 30, 40, 50, 60, 70, 80, 90]

//RESOLUÇÃO DO PROFESSOR
let n1 = [10, 20, 30, 40, 50]
let n2 = [90, 80, 70, 60, 50]

n2.reverse()
n2.shift(0)
n1.push(n2)
let result = n1.flat()
console.log(result)
