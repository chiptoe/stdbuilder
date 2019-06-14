var { test, expect } = global;
var { build } = require('../src/builder');

test('Concat all project files in order', () => {
	var result = build('./tests/builder/project/');
	var expected = `(function() {
	// 0__utils

	// 1__validations

	// 2__models

	// 3__views

	// 4__connections

	// 5__services

	// 6__controllers

	// 7__main.js
}());`;
	expect(result).toBe(expected);
});
