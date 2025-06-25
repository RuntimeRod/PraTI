function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 150 },
  { cliente: "João", total: 200 },
  { cliente: "Maria", total: 300 },
];

console.log(agruparPorCliente(vendas));

