const prompt = require('prompt-sync')();

const atividadesMes = parseInt(prompt('Digite a quantidade de horas de atividade fisica por mes: '))

if (atividadesMes <= 10) {
    const pontos = 2 * atividadesMes
    const reais = pontos * 0.5
    console.log(`Reais obtidos: R$${reais.toFixed(2)}!`)
} else if (atividadesMes > 10 && atividadesMes <= 20) {
    const pontos = 5 * atividadesMes
    const reais = pontos * 0.5
    console.log(`Reais obtidos: R$${reais.toFixed(2)}!`)
} else if (atividadesMes > 20) {
    const pontos = 10 * atividadesMes
    const reais = pontos * 0.5
    console.log(`Reais obtidos: R$${reais.toFixed(2)}!`)
}
