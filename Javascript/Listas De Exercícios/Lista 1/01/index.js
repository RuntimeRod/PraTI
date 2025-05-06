const prompt = require('prompt-sync')();

const numeroIntero = parseInt(prompt('Digite um número inteiro:'))

if ((numeroIntero % 2) == 0) {
    console.log('PAR');
}

if ((numeroIntero % 2) !== 0) {
    console.log('IMPAR');
}