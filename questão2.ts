type Familia = {
  rendaPorPessoa: number;
  cadastroAtivo: boolean;
  temIdoso: boolean;
};

function avaliarElegibilidade(familia: Familia): string {
  const atendeRenda = familia.rendaPorPessoa <= 706;
  const atendeCadastro = familia.cadastroAtivo;

  if (!atendeRenda || !atendeCadastro) {
    return "Inelegível: Não atende aos critérios básicos de renda ou cadastro.";
  }


  if (familia.temIdoso) {
    return "Elegível com PRIORIDADE (Possui pessoa idosa na família).";
  }

  return "Elegível (Atendimento regular).";
}

const cenariosQ02: Familia[] = [
  { rendaPorPessoa: 500, cadastroAtivo: true, temIdoso: true },   
  { rendaPorPessoa: 600, cadastroAtivo: true, temIdoso: false },  
  { rendaPorPessoa: 800, cadastroAtivo: true, temIdoso: true },   
  { rendaPorPessoa: 400, cadastroAtivo: false, temIdoso: true }   
];

cenariosQ02.forEach((f, idx) => {
  console.log(`Cenário ${idx + 1}: ${avaliarElegibilidade(f)}`);
});
