const leiturasSensor = [22, -5, 24, 999, 25];
const leiturasValidas: number[] = [];

for (const leitura of leiturasSensor) {
  if (leitura === 999) {
    break;
  }
  if (leitura < 0) {
    continue;
  }
  leiturasValidas.push(leitura);
}

let soma = 0;
for (const val of leiturasValidas) {
  soma += val;
}

const media = leiturasValidas.length > 0 ? soma / leiturasValidas.length : 0;

console.log("Leituras consideradas no relatório:", leiturasValidas);
console.log(`Média das leituras válidas: ${media.toFixed(2)}°C`);
