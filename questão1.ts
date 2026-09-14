export function classificarConsumo(consumo: number): string {
  if (consumo < 0) {
    throw new Error("Consumo inválido: valor não pode ser negativo.");
  }
  
  if (consumo <= 100) {
    return "Faixa 1 (Até 100 kWh)";
  } else if (consumo <= 220) {
    return "Faixa 2 (De 101 a 220 kWh)";
  } else {
    return "Faixa 3 (Acima de 220 kWh)";
  }
}

const testesQ01 = [0, 100, 101, 220, 221, -15];

console.log("=== QUESTAO 01: TARIFA DE ENERGIA ===");
for (const consumo of testesQ01) {
  try {
    const resultado = classificarConsumo(consumo);
    console.log(`Consumo: ${consumo} kWh -> ${resultado}`);
  } catch (erro: any) {
    console.log(`Consumo: ${consumo} kWh -> ERRO: ${erro.message}`);
  }
}
