const prompt = require('prompt-sync')()

const distancia = parseInt(prompt('Digite a distancia em KM da viagem: '))

if (distancia > 200) {
    const precoViagem = distancia * 0.45
    console.log(`Preco da viagem: R$ ${precoViagem.toFixed(2)} reais!`);
}

if (distancia <= 200) {
    const precoViagem = distancia * 0.5
    console.log(`Preco da viagem: R$ ${precoViagem.toFixed(2)} reais!`);
}