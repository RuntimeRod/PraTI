const prompt = require('prompt-sync')();
let soma = 0

for(let i = 1; i <= 5; i++){
    const valor = parseInt(prompt(`Digite o ${i}. valor: `))
    soma += valor
}

console.log(soma);
