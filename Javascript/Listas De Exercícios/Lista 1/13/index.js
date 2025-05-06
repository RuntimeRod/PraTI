const prompt = require('prompt-sync')();

let contador = 0
let soma = 0

while(true) {
    let valor = parseFloat(prompt(`Digite o valor decimal (0 para cancelar): `))

    if (valor == 0) {
        break;
    }
    soma += valor
    contador++
    
}

let resultado = soma / contador
console.log(`Media: ${resultado.toFixed(2)}`)