const prompt = require('prompt-sync')();

let numeroAleatorio = Math.floor(Math.random() * 101)

//console.log(numeroAleatorio)

do {
    let option = parseInt(prompt('Digite uma opcao de entre 1 e 100: '))

    if (numeroAleatorio > option) {
        console.log("Tente um numero maior");
    }

    if (numeroAleatorio < option) {
        console.log("Tente um numero menor");
    }

    if (numeroAleatorio == option) {
        console.log("Acertou!");
        break
    }

} while (true);