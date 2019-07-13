var { describe, test, expect } = global;
var { build, prepareBasepath, tryReportTerserError } = require('../src/builder');
var fs = require('fs');
const { execSync } = require('child_process');

fs.copyFileSync('./src/noconflict.js', './tests/builder/project/0__noconflict.js');
execSync('rm -rf ./tests/builder/project/dist/');

test('Concat all project files in order', () => {
	var result = build('./tests/builder/project/');
	var expected = `(function() {
	// eslint-disable-next-line no-unused-vars
	var PROJECT_HASH = 'PUT_MD5_HASH_HERE';

	/* istanbul ignore next */
	var w = (typeof(global) === 'object' ? global : window);
	// @ts-ignore
	w.global_repository = w;
	w = undefined;

	// 1__utils
	(function() {
		function myFunc() {}

		global_repository[PROJECT_HASH + '/utils/myFunc'] = myFunc;
	}());

	// 2__validations

	// 3__models

	// 4__views

	// 5__connections

	// 6__services

	// 7__controllers

	// 8__main.js
	return {
		myFunc: global_repository[PROJECT_HASH + '/utils/myFunc']
	};
}());`;
	expect(result).toBe(expected);
});

test('Concat all project files in order and minify', () => {
	process.argv.push('--min');

	var result = build('./tests/builder/project/');
	var expected = '(function(){var PROJECT_HASH="PUT_MD5_HASH_HERE";var w=typeof global==="object"?global:window;w.global_repository=w;w=undefined;(function(){function myFunc(){}global_repository[PROJECT_HASH+"/utils/myFunc"]=myFunc})();return{myFunc:global_repository[PROJECT_HASH+"/utils/myFunc"]}})();';
	expect(result).toBe(expected);
});

test('Save bundle to file if --dist flag is provided', () => {
	process.argv.push('--min');
	process.argv.push('--dist');

	build('./tests/builder/project/');
	var expected = '(function(){var PROJECT_HASH="PUT_MD5_HASH_HERE";var w=typeof global==="object"?global:window;w.global_repository=w;w=undefined;(function(){function myFunc(){}global_repository[PROJECT_HASH+"/utils/myFunc"]=myFunc})();return{myFunc:global_repository[PROJECT_HASH+"/utils/myFunc"]}})();';
	var result = fs.readFileSync('./tests/builder/project/dist/bundle.js', 'utf8');
	expect(result).toBe(expected);

	fs.unlinkSync('./tests/builder/project/dist/bundle.js');

	build('./tests/builder/project/');
	result = fs.readFileSync('./tests/builder/project/dist/bundle.js', 'utf8');
	expect(result).toBe(expected);
});

describe('prepareBasepath()', () => {
	test('Prepare custom path', () => {
		var path = './my/custom/path';
		var result = prepareBasepath(path);
		expect(result).toBe(path);
	});

	test('Prepare default path', () => {
		expect(prepareBasepath()).toBe('./');
	});
});

describe('Throw when terser minifier reports error', () => {
	var terserResult = { error: new Error('Some terser error') };
	expect(() => tryReportTerserError(terserResult)).toThrow(terserResult.error);
});
