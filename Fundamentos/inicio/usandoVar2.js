/*
    - Escopo global não recomendado, critico no frontend - browser
    - Exemplo dentro e fora com valor 2 - foi sobrescrito o valor
*/

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =' , numero)