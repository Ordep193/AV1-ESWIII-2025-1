const CalculadoraService = require('../src/calculadoraService');

describe('Calculadora - Operações Básicas', () => {
  let calculator;

  beforeEach(() => {
    calculator = new CalculadoraService();
  });

  // Cenário: Soma de dois números
  describe('Soma', () => {
    it('deve retornar 8 para a soma de 5 + 3', () => {
      const resultado = calculator.soma(5, 3);
      expect(resultado).toBe(8);
    });

    it('deve retornar -2 para a soma de -5 + 3', () => {
      const resultado = calculator.soma(-5, 3);
      expect(resultado).toBe(-2);
    });
  });

  // Cenário: Subtração de dois números
  describe('Subtração', () => {
    it('deve retornar 2 para a subtração de 5 - 3', () => {
      const resultado = calculator.subtrai(5, 3);
      expect(resultado).toBe(2);
    });

    it('deve retornar -8 para a subtração de -5 - 3', () => {
      const resultado = calculator.subtrai(-5, 3);
      expect(resultado).toBe(-8);
    });
  });
});
