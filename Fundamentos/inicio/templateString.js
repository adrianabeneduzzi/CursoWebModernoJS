const nome = 'Adriana'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

//função
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)