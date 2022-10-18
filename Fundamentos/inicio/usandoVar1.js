/*
    - A var ficará visivel dentro ou fora do bloco do código desde que não seja uma function
    - Se tratando de variavel global, tem dois escopos possíveis:
        - Nível global - browser
        - Nível no escopo de função
*/

{
  {
    {
      {
        var sera = 'Será???'
      }
    }
  }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)