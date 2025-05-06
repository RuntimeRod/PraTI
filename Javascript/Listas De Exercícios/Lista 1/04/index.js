const prompt = require('prompt-sync')();

const option = parseInt(prompt('Digite uma opcao de entre 1 e 3: '))

switch (option) {
    case 1:
        console.log('option 1 selecionada');
        break;
    case 2:
        console.log('option 2 selecionada');
        break;
    case 3:
        console.log('option 3 selecionada');
        break;
    default:
        console.log('option invalida');
        break;
}
