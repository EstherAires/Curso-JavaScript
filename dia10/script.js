// ////////ARRAY////////
// // uma estrutura de dados que te permite armazenar multiplos dados
// //sendo números, strings, objetos e até mesmo outros arrays

// let cart = ['Agua', 'Arroz', 'Carne', 'Feijão']

// //os itens que estão presentes dentro do array são chamados de elementos
// //posicionamento de cada elemento é chamado de índice (sempre começa em 0)

// console.log(cart)

// //ACESSANDO ITENS DE UMA ARRAY
// console.log(cart[0]) //retorna agua
// console.log(cart[2]) //retorna carne

// console.log(`A minha comida favorita é ${cart[1]} e ${cart[3]}`)
// console.log(`A minha lista de compras para hoje contem os itens: ${cart}`)

// //MODIFICANDO ELEMENTOS DE UMA ARRAY
// let cart2 = ['Shampoo', 'Condicionador', 'Hidratante', 'Creme de Pentear']
// console.log(cart2)
// cart2[1] = 'Sabonete'
// console.log(cart2)

// let numbers = [10, 20, 33, 40, 5, 13]
// console.log(numbers)
// console.log(numbers[3])

// //é possível fazer calculos matemáticos utilizando os itens de uma array
// console.log(numbers[0] + numbers[2])

// //é possível adicionar boolean a lista
// numbers.push(true)

// //podemos adicionar empurrando um novo item a lista ou apenas editar o array criado acima
// console.log(numbers)

/*Criar uma solução que concatena o terceiro item da lista logo abaixo 
ao texto na console. prints 'In the second cage we have: Birds
*/

let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters']

// console.log(`In the second cage we have:
//             \n${petShop[2]}`)

//Acessar elementos do fim para o início
console.log(petShop[petShop.length - 1])
console.log(petShop[petShop.length - 2])
console.log(petShop[petShop.length - 3])
console.log(petShop[petShop.length - 4])

//Adicionando Novos Elementos: Novos elementos podem ser adicionados à
//Array ao especificar um índice que ainda não existe
petShop[4] = 'Lizard'
console.log(petShop)
