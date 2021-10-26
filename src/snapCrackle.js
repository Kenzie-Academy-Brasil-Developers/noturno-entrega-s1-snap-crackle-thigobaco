
function snapCrackle(maxValue) {
let saidaArr = [];
  for (let valor=1;valor <= maxValue; valor++) {
    if (valor % 5 === 0 && valor % 2 !== 0) {
      saidaArr.push("SnapCrackle");
    } else if (valor % 5 === 0) {
      saidaArr.push("Crackle");
    } else if (valor % 5 === 0 || valor % 2 !== 1) {
      saidaArr.push(valor);
    } else if (valor % 2 !== 0) {
      saidaArr.push("Snap");
    }
    
  }
  return `${saidaArr}` 
}
console.log(snapCrackle(12)); 
