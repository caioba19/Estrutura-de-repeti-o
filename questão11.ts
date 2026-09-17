const consumoSemanal: number[] = [120, 135, 98, 150, 142, 110, 160];

let totalConsumo = 0;

for (let i = 0; i < consumoSemanal.length; i++) {
  totalConsumo += consumoSemanal[i];
}

const mediaSemanal = totalConsumo / consumoSemanal.length;

let diasAcimaDaMedia = 0;
for (let i = 0; i < consumoSemanal.length; i++) {
  if (consumoSemanal[i] > mediaSemanal) {
    diasAcimaDaMedia++;
  }
}

console.log(`Consumo Total: ${totalConsumo} kWh`);
console.log(`Média Semanal: ${mediaSemanal.toFixed(2)} kWh`);
console.log(`Dias acima da média: ${diasAcimaDaMedia} dias`);
