interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

const estoqueGeral: Produto[] = [
  { id: 1, nome: "Teclado", quantidade: 10 },
  { id: 2, nome: "Mouse", quantidade: 0 },
  { id: 3, nome: "Monitor", quantidade: 3 },
  { id: 4, nome: "Gabinete", quantidade: 0 },
  { id: 5, nome: "Headset", quantidade: 7 }
];

function relatorioEstoque(produtos: readonly Produto[]): void {
  let countZerados = 0;
  let countCriticos = 0;
  let countRegulares = 0;

  for (const item of produtos) {
    if (item.quantidade === 0) {
      countZerados++;
      console.log(`[ZERADO] Produto: ${item.nome}`);
    } else if (item.quantidade < 5) {
      countCriticos++;
      console.log(`[ABAIXO DE 5] Produto: ${item.nome} (${item.quantidade} un)`);
    } else {
      countRegulares++;
      console.log(`[REGULAR] Produto: ${item.nome} (${item.quantidade} un)`);
    }
  }

  console.log("\n--- Resumo do Estoque ---");
  console.log(`Itens Zerados: ${countZerados}`);
  console.log(`Itens Críticos (<5): ${countCriticos}`);
  console.log(`Itens Regulares: ${countRegulares}`);
}

relatorioEstoque(estoqueGeral);
