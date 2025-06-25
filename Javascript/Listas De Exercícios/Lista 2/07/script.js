function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

const produtos = [
    { nome: "Arroz", preco: 20 },
    { nome: "Feijão", preco: 15 },
    { nome: "Macarrão", preco: 10 }
];

console.log(nomesOrdenadosPorPreco(produtos)); 