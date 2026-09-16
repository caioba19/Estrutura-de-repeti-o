function calcularDesconto(valor: number, isInstitucional: boolean) {
  let percentualDesconto = 0;

  if (valor > 600) {
    percentualDesconto = 0.15;
  } else if (valor > 300) {
    percentualDesconto = 0.10;
  } else if (valor > 100) {
    percentualDesconto = 0.05;
  }

  if (isInstitucional) {
    percentualDesconto += 0.03;
  }
  if (percentualDesconto > 0.18) {
    percentualDesconto = 0.18;
  }

  const valorDesconto = valor * percentualDesconto;
  const valorFinal = valor - valorDesconto;

  return {
    percentualAplicado: `${(percentualDesconto * 100).toFixed(0)}%`,
    valorDesconto: valorDesconto.toFixed(2),
    valorFinal: valorFinal.toFixed(2)
  };
}

console.log("R$ 80 (Comum):", calcularDesconto(80, false));
console.log("R$ 200 (Comum):", calcularDesconto(200, false));
console.log("R$ 400 (Institucional):", calcularDesconto(400, true));
console.log("R$ 700 (Institucional - Teto 18%):", calcularDesconto(700, true));
