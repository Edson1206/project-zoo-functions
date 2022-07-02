const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('não recebendo parâmetros a função retorna os dias e horários de funcionamento do zoo', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toBe(expected);
  });
  it('recebendo como argumentos \'Monday\' e \'09:00-AM\' a função retorna a string \'The zoo is closed\'', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expect = 'The zoo is closed';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Wednesday\' e \'09:00-PM\' a função retorna a string \'The zoo is open\'', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expect = 'The zoo is open';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Thu\' e \'09:00-AM\' a função retorna a string \'The day must be valid. Example: Monday\'', () => {
    const actual = getOpeningHours('Thu', '09:00-AM');
    const expect = 'The day must be valid. Example: Monday';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Friday\' e \'09:00-ZM\' a função retorna a string \'The abbreviation must be \'AM\' or \'PM\'\'', () => {
    const actual = getOpeningHours('Friday', '09:00-ZM');
    const expect = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Saturday\' e \'C9:00-AM\' a função retorna a string \'The hour should represent a number\'', () => {
    const actual = getOpeningHours('Saturday', 'C9:00-AM');
    const expect = 'The hour should represent a number';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Sunday\' e \'09:c0-AM\' a função retorna a string \'The minutes should represent a number\'', () => {
    const actual = getOpeningHours('Sunday', '09:c0-AM');
    const expect = 'The minutes should represent a number';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Monday\' e \'13:00-AM\' a função retorna a string \'The hour must be between 0 and 12\'', () => {
    const actual = getOpeningHours('Monday', '13:00-AM');
    const expect = 'The hour must be between 0 and 12';
    expect(actual).toBe(expect);
  });
  it('recebendo como argumentos \'Tuesday\' e \'09:60-AM\' a função retorna a string \'The minutes must be between 0 and 59\'', () => {
    const actual = getOpeningHours('Tuesday', '09:60-AM');
    const expect = 'The minutes must be between 0 and 59';
    expect(actual).toBe(expect);
  });
});
