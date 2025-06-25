function memorizar(funcao) {
    let cache = {};

    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        } else {
            let resultado = funcao(arg);
            cache[arg] = resultado;
            return resultado;
        }
    };
}

function quadrado(x) {
    console.log("Calculando...");
    return x * x;
}

const quadradoMemoizado = memorizar(quadrado);

console.log(quadradoMemoizado(5)); 
console.log(quadradoMemoizado(5)); 
console.log(quadradoMemoizado(7)); 
console.log(quadradoMemoizado(7)); 

