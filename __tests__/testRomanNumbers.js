require('jest');
const { romanNumbers } = require('../src/romanNumbers');

it('return the number as a string of roman number', () => {
    let one = 1, five = 5, ten = 10, fourteen = 14;
    const expected = ['I', 'V', 'X', 'XIV']

    let actual = romanNumbers(one, five, ten, fourteen);
    expect(actual).toBe(expected);
})