let frase = "ola ola mundo mundo"
let palavras = frase.split(" ")
let palavrasUnicas = []

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    let palavraUnica = true

    for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavra === palavrasUnicas[j]) {
            palavraUnica = false
            break
        }  
    }
    
    if(palavraUnica) {
        palavrasUnicas.push(palavra)
    }
}

console.log(palavrasUnicas)