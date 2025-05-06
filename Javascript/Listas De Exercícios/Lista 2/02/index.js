const prompt = require('prompt-sync')()

const velocidade = parseInt(prompt('Digite a velocidade do carro: '))
if(velocidade > 80) {
    const multa = (velocidade - 80) * 5
    console.log(`Velocidade acima do permitido! (${velocidade}km/h), aplicando multa de R$${multa.toFixed(2)} reais`);
} else {
    console.log(`velocidade ok!`);
}