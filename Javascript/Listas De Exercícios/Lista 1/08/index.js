const prompt = require('prompt-sync')();

const valor1 = parseInt(prompt('Digite o valor 1: '))
const valor2 = parseInt(prompt('Digite o valor 2: '))

if (valor1 == valor2) {
    console.log('Os valores devem ser diferentes!');
} else if (valor1 > valor2){
    console.log(`${valor1}, ${valor2}`);
} else {
    console.log(`${valor2}, ${valor1}`);
}
