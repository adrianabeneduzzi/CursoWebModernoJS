let valor //não inicializada
console.log(valor)
//console.log(valor2)// Não foi declarada

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro! //Mai indicado é sempre ter um valor padrão para esses casos

const produto = {}
console.log(produto.preco)
//console.log(produto.preco.a)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined prefira o null
console.log(!!produto.preco)
//delete produto.preco // usar essa estratégia 
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)