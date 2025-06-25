function debounce(fn, delay) {
    return function(...argumentos) {
        setTimeout(() => {
            fn.apply(this, argumentos);
        }, delay);
    };
}

function mostrarMensagem(mensagem) {
    console.log("Executando: " + mensagem);
}

const mostrarMensagemDebounce = debounce(mostrarMensagem, 1000);


mostrarMensagemDebounce("Teste1");
