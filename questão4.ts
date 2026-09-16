type Perfil = "aluno" | "professor" | "coordenador";

function obterPermissao(perfil: string): string {
  switch (perfil as Perfil) {
    case "aluno":
      return "Permissão Concedida: Acesso à Área de Estudos e Notas.";
    case "professor":
      return "Permissão Concedida: Acesso ao Diário de Classe e Lançamentos.";
    case "coordenador":
      return "Permissão Concedida: Acesso Total à Gestão Acadêmica.";
    default:
      return "Permissão Negada: Perfil desconhecido ou inválido.";
  }
}
const perfisQ04 = ["aluno", "professor", "coordenador", "visitante"];

perfisQ04.forEach((p) => {
  console.log(`Perfil: "${p}" -> ${obterPermissao(p)}`);
});
