const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 5) + 1;

while(true) {
    const tentativa = parseInt(prompt('digite um numero inteiro entre 1 e 5: '))

    if(tentativa < 1 || tentativa > 5) {
        console.log(`valor invalido`);
    } else if (tentativa == numeroAleatorio) {
        console.log(`ACERTOU!`);
        break;
    } else if (tentativa > numeroAleatorio) {
        console.log(`Tente chutar um valor mais baixo!`);
    } else if (tentativa < numeroAleatorio) {
        console.log(`Tente chutar um valor mais alto!`);
    }
}