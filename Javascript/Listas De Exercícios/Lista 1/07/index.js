const prompt = require('prompt-sync')();

const macasCompradas = parseInt(prompt('Digite o numero de macas: '))

if (macasCompradas >= 12) {
    const preco = 0.25 * macasCompradas
    console.log(`Desconto aplicado! ${macasCompradas} custaram um total de R$${preco.toFixed(2)} reais!`);
} else {
    const preco = 0.3 * macasCompradas
    console.log(`Preco normal, ${macasCompradas} custaram um total de R$${preco.toFixed(2)} reais!`);
}
1
