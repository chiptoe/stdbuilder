// @ts-check
var fs = require('fs');
var Path = require('path');
var Terser = require('terser');
var terserConfig = require('../.terser');
var buildConfig = require(Path.resolve(process.cwd(), '.build'));

/**
 * @param  {string=} basepath
 */
exports.build = function(basepath) {
	basepath = exports.prepareBasepath(basepath);
	var paths = buildConfig.build;

	var builder = '';

	paths.forEach((path) => {
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

	builder = `(function() {
${builder.slice(0, -1)}}());`;

	if (process.argv.indexOf('--min') !== -1) {
		var result = Terser.minify(builder, terserConfig);
		exports.tryReportTerserError(result);
		builder = result.code;
	}

	if (process.argv.indexOf('--dist') !== -1) {
		if (!fs.existsSync(`${basepath}/dist/`)) fs.mkdirSync(`${basepath}/dist/`);
		fs.writeFileSync(`${basepath}/dist/bundle.js`, builder);
	}
	else {
		// eslint-disable-next-line no-console
		console.log(builder);
	}

	return builder;
};

exports.prepareBasepath = function(basepath) {
	return basepath || './';
};

exports.tryReportTerserError = function(terserResult) {
	if (terserResult.error) throw terserResult.error;
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
