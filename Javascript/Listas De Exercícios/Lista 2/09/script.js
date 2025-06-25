function paresParaObjeto(pares) {
  let obj = {};
  for (let i = 0; i < pares.length; i++) {
    obj[pares[i][0]] = pares[i][1];
  }
  return obj;
}

function objetoParaPares(obj) {
  let pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

const pares = [['nome', 'João'], ['idade', 30]];
const obj = { nome: 'João', idade: 30 };

console.log(paresParaObjeto(pares)); 
console.log(objetoParaPares(obj)); 

