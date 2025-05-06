const prompt = require('prompt-sync')();

const peso = Number(prompt('Digite seu peso em KG: '))
const altura = parseInt(prompt('Digite sua altura em CM: '))
const imc = peso / (altura / 100)

if (imc <= 18.5) {
    console.log(`Magreza (imc: ${imc.toFixed(1)})`);
} else if (imc <= 24.9) { 
    console.log(`Peso Normal (imc: ${imc.toFixed(1)})`);
} else if (imc <= 29.9) {
    console.log(`Sobrepeso (imc: ${imc.toFixed(1)})`);
} else {
    console.log(`Obeso (imc: ${imc.toFixed(1)})`);
}