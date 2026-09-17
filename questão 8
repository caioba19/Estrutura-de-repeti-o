type Regiao = "N" | "NE" | "CO" | "SE" | "S";

function processarPedido(valorTotal: number, regiao: Regiao) {
  let valorFrete = 0;

  switch (regiao) {
    case "N": valorFrete = 50.00; break;
    case "NE": valorFrete = 30.00; break;
    case "CO": valorFrete = 40.00; break;
    case "SE": valorFrete = 20.00; break;
    case "S": valorFrete = 35.00; break;
  }
  const isElegivelFreteGratis = valorTotal > 500 && (regiao === "NE" || regiao === "SE");
  
  if (isElegivelFreteGratis) {
    valorFrete = 0;
  }

  return {
    subtotal: valorTotal,
    regiao,
    frete: valorFrete,
    totalFinal: valorTotal + valorFrete
  };
}

console.log(processarPedido(600, "NE")); 
console.log(processarPedido(600, "N"));
console.log(processarPedido(400, "SE"));
