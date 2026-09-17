function avaliarDesempenho(n1: number, n2: number, n3: number): string {
  const notas = [n1, n2, n3];

  for (const n of notas) {
    if (n < 0 || n > 10) {
      return `Erro: Nota ${n} é inválida. Todas as notas devem estar entre 0 e 10.`;
    }
  }

  const media = (n1 + n2 + n3) / 3;

  if (media >= 7) {
    return `Média ${media.toFixed(2)}: Aprovado`;
  } else if (media >= 5) {
    return `Média ${media.toFixed(2)}: Recuperação`;
  } else {
    return `Média ${media.toFixed(2)}: Reprovado`;
  }
}

console.log(avaliarDesempenho(7, 7, 7)); 
console.log(avaliarDesempenho(5, 5, 4.9));  
console.log(avaliarDesempenho(5, 5, 5));    
console.log(avaliarDesempenho(10, -1, 8));  
