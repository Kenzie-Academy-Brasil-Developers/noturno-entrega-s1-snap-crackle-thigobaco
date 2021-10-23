let primeira = "Snap";
let segundaMsg = "Crackle";
let terceiraMsg = "SnapCrackle";
let maxValue = 12;
let valor = 1;
let saidaArr = [];
function snapCrackle() {
  while (valor <= maxValue) {
    if (valor % 5 === 0 && valor % 2 !== 0) {
      saidaArr.push(terceiraMsg);
    } else if (valor % 5 === 0) {
      saidaArr.push(segundaMsg);
    } else if (valor % 5 === 0 || valor % 2 !== 1) {
      saidaArr.push(valor);
    } else if (valor % 2 !== 0) {
      saidaArr.push(primeira);
    }
    valor++;
  }
  return saidaArr // para retornar a saida do meu array nas codições
}
console.log(snapCrackle().join()); // para retornar a junção da matriz.(.join) tive que pesquisar sobre um método que me desse esse retorno https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join