function eBissexto(ano: number): boolean {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

const anosQ07 = [1900, 2000, 2024, 2100];

anosQ07.forEach((ano) => {
  console.log(`Ano ${ano} é bissexto? -> ${eBissexto(ano)}`);
});
