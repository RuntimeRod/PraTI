const prompt = require('prompt-sync')();

const tipoDeCarro = prompt('digite o tipo de carro (luxo ou popular): ').toLowerCase()
const diasCarro = parseInt(prompt('digite a quantidade de dias para o aluguel: '))
const distanciaPercorrida = parseInt(prompt('digite a distancia percorrida em KM: '))

if (tipoDeCarro == 'popular') {
    const diaria = 90
    let precoDistancia = 0
    if (distanciaPercorrida <= 100) {
        precoDistancia = 0.2
    } else if (distanciaPercorrida > 100){
        precoDistancia = 0.1
    }
    
    const precoFinal = (diaria * diasCarro) + (precoDistancia * distanciaPercorrida)
    console.log(`Valor Final: R$${precoFinal} reais! `);

} else if (tipoDeCarro == 'luxo'){
    const diaria = 150
    let precoDistancia = 0
    if (distanciaPercorrida <= 100) {
        precoDistancia = 0.3
    } else if (distanciaPercorrida > 100){
        precoDistancia = 0.25
    }
    const precoFinal = (diaria * diasCarro) + (precoDistancia * distanciaPercorrida)
    console.log(`Valor Final: R$${precoFinal.toFixed(2)} reais! `);
}