//Variaveis definidas com a palavra reservada let tem escopo -> global | função | bloco
let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)