/* Vamos criar um sistema de autenticação
que verifiva várias condições antes de permitir acesso 

let usuario valido = true/false
let senhaCorreta   = true/false
let permissao     = true/false

Mensagem:
Acesso Permitido
Acesso negado. Usuário sem permissão
Senha incorreta. Tente novamente
usuário não encontrado
*/

let usuarioValido = true
let senhaCorreta = true
let permissao = true

if (usuarioValido == true && senhaCorreta == true && permissao == true) {
  console.log(`Acesso permitido`)
} else if (senhaCorreta == false) {
  console.log(`Senha incorreta. Tente novamente`)
} else if (permissao == false) {
  console.log(`Acesso negado. Usuário sem permissão`)
} else if (usuarioValido == false) {
  console.log(`Usuário não encontrato`)
}
