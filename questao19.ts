let countPares = 0;
let countImpares = 0;
let countMultiplos5 = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    countPares++;
  } else {
    countImpares++;
  }

  if (i % 5 === 0) {
    countMultiplos5++;
  }
}

console.log(`--- Análise do Intervalo 1 a 50 ---`);
console.log(`Total de números Pares: ${countPares}`);
console.log(`Total de números Ímpares: ${countImpares}`);
console.log(`Total de múltiplos de 5: ${countMultiplos5}`);
