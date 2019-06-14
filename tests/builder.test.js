var { test, expect } = global;
var { build } = require('../src/builder');
var fs = require('fs');

fs.copyFileSync('./src/noconflict.js', './tests/builder/project/0__noconflict.js');

test('Concat all project files in order', () => {
	var result = build('./tests/builder/project/');
	var expected = `(function() {
	// 1__utils
	set__('Utils', (function() {
		return {
			myFunc: () => {}
		};
	}()));

	// 2__validations

	// 3__models

	// 4__views

	// 5__connections

	// 6__services

	// 7__controllers

	// 8__main.js
}());`;
	expect(result).toBe(expected);
});
