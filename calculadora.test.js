const {
  soma,
  subtrai,
  multiplica,
  divide,
  ehPar,
  raiz,
  media,
} = require("./calculadora");

describe("soma", () => {
  test("Plus two positive numbers", () => {
    expect(soma(5, 5)).toBe(10);
  });
});

describe("raiz", () => {
  test("Square a number not exactly", () => {
    expect(raiz(2)).toBeCloseTo(1.414);
  });
  test("Test an error with a negative number", () => {
    expect(() => raiz(-2)).toThrow();
  });
});

//_____________________________________________________________________________

//EXERCÍCIOS AULA 

//EXERCÍCIO 1 - subtrai

describe("subtrai", () => {
  test("Subtrair dois números", () => {
    expect(subtrai(10, 8)).toBe(2);
  });
  test("Retornar um número negativo", () => {
    expect(subtrai(6, 17)).toBe(-11);
  });
});

//EXERCÍCIO 2 - multiplica
describe("Multiplica", ()=>{
    test("Multiplicar dois números", ()=>{
        expect(multiplica(2, 5)).toBe(10)
    })

    test("Tentar multiplicar 0 por um número", ()=>{
        expect(multiplica(0, 10)).toBe(0)
    })
    test("Resultado de uma multiplicação com dois números", ()=>{
        expect(multiplica(2, 5)).toBeGreaterThan(2, 5)
    })
})

//EXERCÍCIO 3 - divide
describe("Divide", ()=>{
    test("Dividir dois números", ()=>{
        expect(divide(10, 2)).toBe(5)
    })
    test("Lançar erro ao dividir um número por 0", ()=>{
        expect(()=> divide(10, 0)).toThrow("Nao e possivel dividir por zero")
    })
})

//EXERCÍCIO 4 - ehPar

describe("ehPar", () => {
  test("Deve retornar verdadeiro para número par", () => {
    expect(ehPar(8)).toBeTruthy();
  });

  test("Deve retornar falso para número ímpar", () => {
    expect(ehPar(7)).toBeFalsy();
  });
});

//EXERCÍCIO 5 - Media

describe("media", () => {
  test("Deve calcular corretamente a média de uma lista de inteiros", () => {
    expect(media([2, 4, 6, 8])).toBe(5);
  });

  test("Deve calcular corretamente a média quando o resultado for decimal", () => {
    expect(media([2, 3])).toBe(2.5);
  });

  test("Deve lançar erro quando a lista estiver vazia", () => {
    expect(() => media([])).toThrow();
  });

  test("Deve lançar erro quando o argumento não for um array", () => {
    expect(() => media(10)).toThrow();
  });
});