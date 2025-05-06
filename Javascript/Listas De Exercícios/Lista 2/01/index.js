 const prompt = require('prompt-sync')()

 const cigarrosPorDia = parseInt(prompt('Digite a quantidade de cigarros consumidos por dia: '))
 const anosFumando = parseInt(prompt('Digite a quantidade de anos fumando: '))
 const totalDeCigarros = cigarrosPorDia * (anosFumando * 365)
 const diasDeVidaPerdidos = parseInt((totalDeCigarros * 10) / 1440)

 console.log(`Quantidade aproximada de dias perdidos: ${diasDeVidaPerdidos}, top!`);
 

 