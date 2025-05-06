const prompt = require('prompt-sync')();

console.log(`pedra, papel ou tesoura!`);
const player1 = prompt('player 1: ')
const player2 = prompt('player 2: ')


if (player1 === player2) {
    console.log(`EMPATE!`);
} else if ((player1 == 'pedra' && player2 == 'tesoura' ||
            player1 == 'papel' && player2 == 'pedra' ||
            player1 == 'tesoura' && player2 == 'papel'))
            {
    console.log(`Player 1 VENCEU!`);
} else {
    console.log(`Player 2 VENCEU!`);
}