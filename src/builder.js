// @ts-check
var fs = require('fs');
var Path = require('path');

function build() {
	var folders = [
		'./0__utils/',
		'./1__validations/',

		'./2__models/',
		'./3__views/',

		'./4__connections/',
		'./5__services/',
		'./6__controllers/',

		'./7__main.js'
	];

	var builder = '';

	folders.forEach((path) => {
		if (path.lastIndexOf('.js') === -1) {
			var filenames = fs.readdirSync(path);
			filenames.forEach((filename) => {
				builder += indentFileContent(Path.join(path, filename));
			});
		}
		else {
			builder += indentFileContent(path);
		}
	});

	return builder;
}

function indentFileContent(filepath) {
	var lines = fs.readFileSync(filepath, 'utf8').split('\n');
	return lines.map((line) => '\t' + line).join('\n');
}
