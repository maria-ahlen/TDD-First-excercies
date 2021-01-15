require('jest');
const { isWaterBoiling } = require('../src/boiling.js');

it('throw an error on illegal input', () => {
    const input = '55';
    const danger = () => { isWaterBoiling(input); }
    expect(danger).toThrow();
})


it('throw an error on empty input', () => {
    const danger = () => { isWaterBoiling(); }
    expect(danger).toThrow();
})


it('return false if input is to low', () => {
    const input = 30;
    const expected = false;
    
    let actual = isWaterBoiling(input);
    expect(actual).toBe(expected);
})


it('return false if input is to high', () => {
    const input = 105;
    const expected = false;
    
    let actual = isWaterBoiling(input);
    expect(actual).toBe(expected);
})


it('Return true if water is boiling at the correct temperature', () => {
    const input = 100;
    const expected = true;

    let actual = isWaterBoiling(input);
    expect(actual).toBe(expected);
})