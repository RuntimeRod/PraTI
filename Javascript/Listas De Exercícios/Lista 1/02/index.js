const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite uma idade:'))

if (idade < 12) {
    console.log('criança');
} else if (idade < 18) {
    console.log('Adolescente');
} else if (idade >= 18 || idade <= 49) {
    console.log('Adulto');
} else {
    console.log('Idoso');
}