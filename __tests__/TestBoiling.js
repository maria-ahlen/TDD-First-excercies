require('jest');
const { boiling } = require('../src/boiling.js');

it('throw an error on illegal input', () => {
    const input = 'fifty';
    
    const danger = () => { 
        boiling(input); 
    }

    expect(danger).toThrow();
})


it('throw an error if input is to low', () => {
    const input = 30;
    
    const danger = () => { 
        boiling(input); 
    }

    expect(danger).toThrow();
})


it('Return true if water boiling at the correct temperature', () => {
    const input = 100;
    const expected = 100;

    let actual = boiling(input);
    expect(actual).toBe(expected);
})