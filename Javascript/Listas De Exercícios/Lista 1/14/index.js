const prompt = require('prompt-sync')();
const valor = parseInt(prompt(`Digite o valor inteiro: `))
let resultado = valor

for(let i = (valor - 1); i >= 1; i--){
    resultado *= i
}

console.log(resultado);
