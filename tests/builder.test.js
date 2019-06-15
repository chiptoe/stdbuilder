var { test, expect } = global;
var { build } = require('../src/builder');
var fs = require('fs');

fs.copyFileSync('./src/noconflict.js', './tests/builder/project/0__noconflict.js');

test('Concat all project files in order', () => {
	var result = build('./tests/builder/project/');
	var expected = `(function() {
	/* eslint-disable no-underscore-dangle */
	var noconflict__ = 'PUT_MD5_HASH_HERE';

	var global__ = (typeof(global) === 'object' ? global : window);
	global__[noconflict__] = {};

	// @ts-ignore
	global__.set__ = function(k, v) { global__[noconflict__][k] = v; };
	// @ts-ignore
	global__.get__ = function(k) { return global__[noconflict__][k]; };

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
	return {
		myFunc: get__('Utils').myFunc
	};
}());`;
	expect(result).toBe(expected);
});

test('Concat all project files in order and minify', () => {
	process.argv.push('--min');

	var result = build('./tests/builder/project/');
	var expected = '(function(){var noconflict__="PUT_MD5_HASH_HERE";var global__=typeof global==="object"?global:window;global__[noconflict__]={};global__.set__=function(k,v){global__[noconflict__][k]=v};global__.get__=function(k){return global__[noconflict__][k]};set__("Utils",function(){return{myFunc:()=>{}}}());return{myFunc:get__("Utils").myFunc}})();';
	expect(result).toBe(expected);
});
