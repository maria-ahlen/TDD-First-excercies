require('jest');

const { capitalize } = require('../src/capitalize.js');


it('should return a string with first letter capitalized and the rest small', () => {
	const input = 'may the force be with you';
	const expected = 'May the force be with you';

	let actual = capitalize(input);
	expect(actual).toBe(expected);
})

it('should return undefined if the string contains non-letter characters', () => {
	const input = 'C3-P0';
	const expected = undefined;

	let actual = capitalize(input);
	expect(actual).toBe(expected);
})