type CorSemaforo = "vermelho" | "amarelo" | "verde";

function operarSemaforo(cor: CorSemaforo, pedestrePresente: boolean, sensorOk: boolean): string {
  if (!sensorOk) {
    return "MODO DE SEGURANÇA: Sensor inconsistente. Semáforo em alerta amarelo pisca-pisca.";
  }

  switch (cor) {
    case "vermelho":
      return pedestrePresente
        ? "Sinal Vermelho: Veículos PARAR. Pedestres ATRAVESSAR."
        : "Sinal Vermelho: Veículos PARAR. Nenhum pedestre aguardando.";
    case "amarelo":
      return "Sinal Amarelo: Veículos PREPARAR PARA PARAR.";
    case "verde":
      return "Sinal Verde: Veículos AVANÇAR. Pedestres AGUARDAR.";
  }
}

console.log(operarSemaforo("vermelho", true, true));
console.log(operarSemaforo("verde", true, true));
console.log(operarSemaforo("amarelo", false, false)); 
