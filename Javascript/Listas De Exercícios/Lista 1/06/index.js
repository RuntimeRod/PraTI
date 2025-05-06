const prompt = require('prompt-sync')();

const ladoA = Number(prompt('Digite o tamanho do lado A: '))
const ladoB = Number(prompt('Digite o tamanho do lado B: '))
const ladoC = Number(prompt('Digite o tamanho do lado C: '))

if ((ladoA >= (ladoB + ladoC)) || (ladoB >= (ladoA + ladoC)) || (ladoC >= (ladoB + ladoA))) {
    console.log('Os lados nao formam um triangulo');
} else if ((ladoA == ladoB) && (ladoC == ladoB)) {
    console.log('triangulo equilatero');
} else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoC == ladoB)) {
    console.log('triangulo isosceles');
} else {
    console.log('triangulo escaleno');
}
