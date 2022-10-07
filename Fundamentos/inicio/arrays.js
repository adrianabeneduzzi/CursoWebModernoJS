/*Array
    - Estrutura indexada
    - Heterogeneo
    - Não tem tamanho fixo
*/
const valores = [7.7,8.9,6.3,9.2]//forma literal
console.log(valores[0],valores[3])
console.log(valores[4])

valores [4] = 10
console.log(valores[4])//permite em JS em outras linguagem gera erro
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')//adicionar novos elementos
console.log(valores)//não é uma boa prática misturar dados

console.log(valores.pop())//retira o ultimo valor do array
delete valores[0]//retirar o elemento do array
console.log(valores)

console.log(typeof valores)