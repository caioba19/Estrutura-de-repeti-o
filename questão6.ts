function classificarTriangulo(a: number, b: number, c: number): string {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Erro: Todas as medidas devem ser maiores que zero.";
  }

  const eTriangulo = (a + b > c) && (a + c > b) && (b + c > a);

  if (!eTriangulo) {
    return "Inválido: Os lados informados não formam um triângulo.";
  }

  if (a === b && b === c) {
    return "Válido: Triângulo Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Válido: Triângulo Isósceles";
  } else {
    return "Válido: Triângulo Escaleno";
  }
}

console.log("Lados 3, 3, 3:", classificarTriangulo(3, 3, 3));
console.log("Lados 5, 5, 8:", classificarTriangulo(5, 5, 8));
console.log("Lados 3, 4, 5:", classificarTriangulo(3, 4, 5));
console.log("Lados 1, 2, 5:", classificarTriangulo(1, 2, 5));
