function simularAutenticacao(tentativasInformadas: string[]): void {
  const SENHA_CORRETA_SIMULADA = "senhaSegura123";
  let tentativaAtual = 0;
  let autenticado = false;

  while (tentativaAtual < tentativasInformadas.length && tentativaAtual < 3) {
    const senhaDigitada = tentativasInformadas[tentativaAtual];
    tentativaAtual++;

    if (senhaDigitada === SENHA_CORRETA_SIMULADA) {
      autenticado = true;
      console.log(`Tentativa ${tentativaAtual}: Senha correta. Acesso concedido!`);
      break;
    } else {
      console.log(`Tentativa ${tentativaAtual}: Senha incorreta.`);
    }
  }

  if (!autenticado && tentativaAtual >= 3) {
    console.log("BLOQUEIO: Número máximo de 3 tentativas excedido.");
  }
}

console.log("--- Teste 1: Sucesso na segunda tentativa ---");
simularAutenticacao(["errada1", "senhaSegura123", "errada2"]);

console.log("\n--- Teste 2: Bloqueio após 3 falhas ---");
simularAutenticacao(["errada1", "errada2", "errada3"]);
