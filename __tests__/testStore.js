require('jest');

const {store, retrive} = require('../src/store.js');
/*
Test cases:
- the parameter to store should not be undefined
- when store is called, the value should be saved
- retreive should return the most recent value stored
*/

it('parameter to store should not be undefined', () => {
    const input = 'hello';

    store(input);
    store();

    let actual = retrive();
    expect(actual).toBe(input);
})