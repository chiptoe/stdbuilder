// @ts-check
var fs = require('fs');
var Path = require('path');

exports.build = function(basepath) {
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
		path = Path.resolve(basepath, path);
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

	return `(function() {
${builder.slice(0, -1)}}());`;
};

function indentFileContent(filepath) {
	var lines = fs.readFileSync(filepath, 'utf8').split('\n');
	var builder = '';
	lines.forEach((line) => {
		if (line) {
			builder += '\t' + line;
		}
		builder += '\n';
	});
	return builder;
}
