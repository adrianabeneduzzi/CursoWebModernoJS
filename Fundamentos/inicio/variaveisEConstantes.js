//Variavéis - Palavra reservada var/Identificador a/ simbolo de atribuição = recebe /valor atribuido a variável

//Atenção ao nomear variáveis de acordo com o contexto

var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50 -> TypeError: Assignment to constant variable.
console.log(c)