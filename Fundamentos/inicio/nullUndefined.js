/*
    Entendendo o Null & Undefined    
*/

const a = {name: 'Teste'}
console.log(a)

const b = a // atribuição por referência - apontam para o mesmo lugar
b.name = 'Opa'
console.log(a)

let c = 3 // valor primitivo
let d = c // cópia por valor - valor independente
d++
console.log(d)
console.log(c)