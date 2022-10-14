//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito com uma sentença de código
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

//Outro exemplo com unico parâmetro
const imprimir2 = a => console.log(a)
imprimir2('Show!!!')