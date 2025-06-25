function fatorial(n) {
    if (n < 0) {
        console.log("Digite um numero maior que 0")
    }

    if (n == 0) {
        return 1
    }

    if(n > 0) {
        return n * fatorial(n-1)
    }
}

let resultado = fatorial(10)
console.log(resultado);
