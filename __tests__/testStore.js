require('jest');
const {store, retrive} = require('../src/store.js');


it('parameter to store should not be undefined', () => {
    const input = 'hello';

    store(input);
    store();

    let actual = retrive();
    expect(actual).toBe(input);
})


it('should save the value when store is called', () => {
    const input = 'lilja';
    const expected = input;

    store(input);
    let actual = retrive();

    expect(actual).toBe(expected);
})


