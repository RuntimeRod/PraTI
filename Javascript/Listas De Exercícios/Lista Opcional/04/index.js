const prompt = require('prompt-sync')();

const ladoA = Number(prompt('Digite o tamanho do lado A: '))
const ladoB = Number(prompt('Digite o tamanho do lado B: '))
const ladoC = Number(prompt('Digite o tamanho do lado C: '))

if ((ladoA >= (ladoB + ladoC)) || (ladoB >= (ladoA + ladoC)) || (ladoC >= (ladoB + ladoA))) {
    console.log('Os lados nao formam um triangulo');
} else {
    console.log('Possivel fazer um triangulo!');
} 
