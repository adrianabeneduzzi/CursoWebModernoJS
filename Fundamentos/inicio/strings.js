const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //retorna vazio
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))// Concatenação a partir do dado literal
console.log('Escola '+ escola +"!")//Outro exemplo de concatenação

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))// Substitui tudo pela letra e através do Regex
console.log('Ana,Maria,Pedro'.split(',')) //Para converter em array
console.log('Ana,Maria,Adriana'.split(/,/))// Com Regex