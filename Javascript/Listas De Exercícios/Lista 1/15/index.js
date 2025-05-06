const prompt = require('prompt-sync')();
const valor = parseInt(prompt(`Digite a quantidade de numeros da sequencia: `))
contador = 0

let primeiroNumero = 0
let segundoNumero = 1

while(contador != valor) {
    console.log(primeiroNumero)
    let terceiroNumero = primeiroNumero + segundoNumero
    primeiroNumero = segundoNumero
    segundoNumero = terceiroNumero

    contador ++
}
