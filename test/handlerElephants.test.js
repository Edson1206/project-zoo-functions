const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('não recebendo um parâmetro, retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('recebendo um parâmetro que não seja string, retorna undefined', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('recebendo um parâmetro válido, retorna o parâmetro solicitado', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('recebendo o parâmetro averageAge, deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = Math.round(10.5);
    expect(actual).toBe(expected);
  });
  it('recebendo o parâmetro names, deve retornar um array com o nome de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toBe(expected);
  });
  it('recebendo um parâmetro inválido, retorna null', () => {
    const actual = handlerElephants('nome');
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('recebendo o parâmetro availability, retorna um array com os dias', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toStrictEqual(expected);
  });
});
