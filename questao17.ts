interface Estudante {
  matricula: number;
  nome: string;
}

const baseEstudantes: Estudante[] = [
  { matricula: 1001, nome: "Ana" },
  { matricula: 1002, nome: "Bruno" },
  { matricula: 1003, nome: "Carla" },
  { matricula: 1004, nome: "Daniel" }
];

function buscarEstudante(matriculaAlvo: number): void {
  let encontrado = false;
  let iteracoes = 0;

  for (let i = 0; i < baseEstudantes.length; i++) {
    iteracoes++;
    if (baseEstudantes[i].matricula === matriculaAlvo) {
      encontrado = true;
      console.log(`Resultado: ${baseEstudantes[i].nome} encontrado em ${iteracoes} iteração(ões).`);
      break;
    }
  }

  if (!encontrado) {
    console.log(`Resultado: Matrícula ${matriculaAlvo} NÃO encontrada após ${iteracoes} iterações.`);
  }
}

console.log("Busca 1 (Matrícula existente no início):");
buscarEstudante(1002);

console.log("\nBusca 2 (Matrícula inexistente):");
buscarEstudante(9999);
