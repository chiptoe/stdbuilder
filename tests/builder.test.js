var { test, expect } = global;
var { build } = require('../src/builder');
var fs = require('fs');

fs.copyFileSync('./src/noconflict.js', './tests/builder/project/0__noconflict.js');

test('Concat all project files in order', () => {
	var result = build('./tests/builder/project/');
	var expected = `(function() {
	/* eslint-disable no-underscore-dangle */
	var __noconflict__ = 'PUT_MD5_HASH_HERE';

	var __global__ = (typeof(global) === 'object' ? global : window);
	__global__[__noconflict__] = {};

	// @ts-ignore
	__global__.set__ = function(k, v) { __global__[__noconflict__][k] = v; };
	// @ts-ignore
	__global__.get__ = function(k) { return __global__[__noconflict__][k]; };

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
