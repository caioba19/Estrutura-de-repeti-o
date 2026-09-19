function executarMenuSimulado(sequenciaEntradas: number[]): void {
  let ponteiroEntrada = 0;
  let opcao: number;

  do {
    opcao = sequenciaEntradas[ponteiroEntrada] ?? 3;
    ponteiroEntrada++;

    console.log("\n*** MENU PRINCIPAL ***");
    console.log("1. Cadastrar");
    console.log("2. Consultar");
    console.log("3. Sair");
    console.log(`Opção digitada: ${opcao}`);

    switch (opcao) {
      case 1:
        console.log("-> Executando funcionalidade: Cadastrar");
        break;
      case 2:
        console.log("-> Executando funcionalidade: Consultar");
        break;
      case 3:
        console.log("-> Encerrando a aplicação...");
        break;
      default:
        console.log("-> Opção inválida! Selecione 1, 2 ou 3.");
    }
  } while (opcao !== 3 && ponteiroEntrada < sequenciaEntradas.length);
}

executarMenuSimulado([99, 1, 5, 2, 3]);
