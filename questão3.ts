function classificarTemperatura(temp: number): string {
  if (temp < -20 || temp > 100) {
    return "ERRO: Leitura fora do intervalo operacional válido (-20°C a 100°C).";
  }

  if (temp <= 29) {
    return "Estado: Normal";
  } else if (temp <= 39) {
    return "Estado: Atenção";
  } else {
    return "Estado: Crítico";
  }
}

const leiturasQ03 = [-25, -20, 25, 29, 30, 39, 40, 101];

leiturasQ03.forEach((t) => {
  console.log(`Temperatura: ${t}°C -> ${classificarTemperatura(t)}`);
});
