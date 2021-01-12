require('jest');
const {multiply} = require('../src/multiply');

it('calculate the product of two numbers', () => {
    let a = 4, b = 15
    const expected = 60

    let actual = multiply(a, b);
    expect(actual).toBe(expected);
})


it('throw an Error if only one parameter', () => {
    let a = 132;
    
    const danger = () => {
        multiply(a);
    }

    expect(danger).toThrow();
})


it('throw an Error if no parameters', () => {
    const danger = () => multiply();
    expect(danger).toThrow();
})


it('throw an error if first parameter not an number', () => {
    let a = 'boll', b = 12;
    const danger = () => multiply(a,b);
    expect(danger).toThrow();
})


it('throw an error if second parameter not an number', () => {
    let a = 14, b = 'anka';
    const danger = () => multiply(a,b);
    expect(danger).toThrow();
})