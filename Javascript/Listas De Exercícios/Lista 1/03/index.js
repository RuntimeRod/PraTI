const prompt = require('prompt-sync')();

const nota = parseInt(prompt('Digite uma nota de 0 a 10: '))

if (nota < 0 || nota > 10) {
    console.log('Digite uma nota valida!');
} else if (nota <= 3) {
    console.log('Reprovado');
} else if (nota <= 6) {
    console.log('Recuperacao');
} else {
    console.log('Aprovado');
}