module.exports = {
	rules: {
		'accessor-pairs': 'off',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'complexity': [
			'off',
			11
		],
		'class-methods-use-this': [
			'error',
			{
				'exceptMethods': []
			}
		],
		'consistent-return': 'off',
		'curly': [
			'error',
			'multi-line'
		],
		'default-case': 'off',
		'dot-notation': 'off',
		'dot-location': [
			'error',
			'property'
		],
		'eqeqeq': 'off',
		'guard-for-in': 'off',
		'no-alert': 'warn',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'off',
		'no-else-return': 'off',
		'no-empty-function': [
			'error',
			{
				'allow': [
					'arrowFunctions',
					'functions',
					'methods'
				]
			}
		],
		'no-empty-pattern': 'error',
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'off',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'off',
		'no-native-reassign': 'off',
		'no-implicit-coercion': [
			'off',
			{
				'boolean': false,
				'number': true,
				'string': true,
				'allow': []
			}
		],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-labels': [
			'error',
			{
				'allowLoop': false,
				'allowSwitch': false
			}
		],
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': [
			'off',
			{
				'ignore': [],
				'ignoreArrayIndexes': true,
				'enforceConst': true,
				'detectObjects': false
			}
		],
		'no-multi-spaces': [
			'error',
			{
				'ignoreEOLComments': false
			}
		],
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': [
			'error',
			{
				'object': 'arguments',
				'property': 'callee',
				'message': 'arguments.callee is deprecated'
			},
			{
				'property': '__defineGetter__',
				'message': 'Please use Object.defineProperty instead.'
			},
			{
				'property': '__defineSetter__',
				'message': 'Please use Object.defineProperty instead.'
			}
		],
		'no-return-assign': [
			'error',
			'always'
		],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-unused-expressions': [
			'error',
			{
				'allowShortCircuit': false,
				'allowTernary': false,
				'allowTaggedTemplates': false
			}
		],
		'no-unused-labels': 'error',
		'no-useless-call': 'off',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': [
			'off',
			{
				'terms': [
					'todo',
					'fixme',
					'xxx'
				],
				'location': 'start'
			}
		],
		'no-with': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				'allowEmptyReject': true
			}
		],
		'radix': [
			'error',
			'as-needed'
		],
		'require-await': 'off',
		'vars-on-top': 'off',
		'wrap-iife': [
			'error',
			'outside',
			{
				'functionPrototypeMethods': false
			}
		],
		'yoda': 'error',
		'valid-typeof': [
			'error',
			{
				'requireStringLiterals': true
			}
		],
		'valid-jsdoc': 'off',
		'use-isnan': 'error',
		'no-negated-in-lhs': 'off',
		'no-unsafe-negation': 'error',
		'no-unsafe-finally': 'error',
		'no-unreachable': 'error',
		'no-unexpected-multiline': 'error',
		'no-template-curly-in-string': 'error',
		'no-sparse-arrays': 'error',
		'no-regex-spaces': 'error',
		'no-prototype-builtins': 'off',
		'no-obj-calls': 'error',
		'no-irregular-whitespace': 'error',
		'no-invalid-regexp': 'error',
		'no-inner-declarations': 'error',
		'no-func-assign': 'error',
		'no-extra-semi': 'error',
		'no-extra-parens': [
			'off',
			'all',
			{
				'conditionalAssign': true,
				'nestedBinaryExpressions': false,
				'returnAssign': false,
				'ignoreJSX': 'all',
				'enforceForArrowConditionals': false
			}
		],
		'no-extra-boolean-cast': 'error',
		'no-ex-assign': 'error',
		'no-empty-character-class': 'error',
		'no-empty': 'error',
		'no-duplicate-case': 'error',
		'no-dupe-keys': 'error',
		'no-dupe-args': 'error',
		'no-debugger': 'error',
		'no-control-regex': 'error',
		'no-constant-condition': 'warn',
		'no-console': 'warn',
		'no-cond-assign': 'off',
		'no-compare-neg-zero': 'error',
		'no-await-in-loop': 'error',
		'getter-return': [
			'error',
			{
				'allowImplicit': true
			}
		],
		'for-direction': 'error',
		'no-sync': 'off',
		'no-restricted-modules': 'off',
		'no-process-exit': 'off',
		'no-process-env': 'off',
		'no-path-concat': 'error',
		'no-new-require': 'error',
		'no-mixed-requires': [
			'off',
			false
		],
		'no-buffer-constructor': 'error',
		'handle-callback-err': 'off',
		'global-require': 'off',
		'callback-return': 'off',
		'wrap-regex': 'off',
		'unicode-bom': [
			'error',
			'never'
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'switch-colon-spacing': [
			'error',
			{
				'after': true,
				'before': false
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				'line': {
					'exceptions': [
						'-',
						'+'
					],
					'markers': [
						'=',
						'!'
					]
				},
				'block': {
					'exceptions': [
						'-',
						'+'
					],
					'markers': [
						'=',
						'!'
					],
					'balanced': true
				}
			}
		],
		'space-unary-ops': [
			2,
			{
				'words': true,
				'overrides': {
					'typeof': false
				}
			}
		],
		'space-infix-ops': 'error',
		'space-in-parens': [
			'error',
			'never'
		],
		'space-before-function-paren': [
			'error',
			'never'
		],
		'space-before-blocks': 'error',
		'sort-vars': 'off',
		'sort-keys': [
			'off',
			'asc',
			{
				'caseSensitive': false,
				'natural': true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		'semi-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'semi': [
			'error',
			'always'
		],
		'require-jsdoc': 'off',
		'quotes': [
			'error',
			'single',
			{
				'avoidEscape': true
			}
		],
		'quote-props': [
			'error',
			'as-needed',
			{
				'keywords': false,
				'unnecessary': false,
				'numbers': false
			}
		],
		'padding-line-between-statements': 'off',
		'padded-blocks': [
			'error',
			{
				'blocks': 'never',
				'classes': 'never',
				'switches': 'never'
			}
		],
		'operator-linebreak': 'off',
		'operator-assignment': [
			'error',
			'always'
		],
		'one-var-declaration-per-line': [
			'error',
			'always'
		],
		'one-var': [
			'error',
			'never'
		],
		'object-property-newline': [
			'error',
			{
				'allowMultiplePropertiesPerLine': true
			}
		],
		'object-curly-newline': [
			'error',
			{
				'ObjectExpression': {
					'minProperties': 4,
					'multiline': true,
					'consistent': true
				},
				'ObjectPattern': {
					'minProperties': 4,
					'multiline': true,
					'consistent': true
				}
			}
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'nonblock-statement-body-position': 'off',
		'no-whitespace-before-property': 'error',
		'no-unneeded-ternary': 'error',
		'no-underscore-dangle': [
			'error',
			{
				'allow': [],
				'allowAfterThis': false,
				'allowAfterSuper': false,
				'enforceInMethodNames': false
			}
		],
		'no-trailing-spaces': [
			'error',
			{
				'skipBlankLines': false,
				'ignoreComments': false
			}
		],
		'no-ternary': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-spaced-func': 'error',
		'no-restricted-syntax': [
			'error',
			"BinaryExpression[operator='in']"
		],
		'no-plusplus': 'off',
		'no-new-object': 'error',
		'no-nested-ternary': 'error',
		'no-negated-condition': 'off',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2,
				'maxEOF': 1
			}
		],
		'no-multi-assign': [
			'error'
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-mixed-operators': [
			'error',
			{
				'groups': [
					[
						'+',
						'-',
						'*',
						'/',
						'%',
						'**'
					],
					[
						'&',
						'|',
						'^',
						'~',
						'<<',
						'>>',
						'>>>'
					],
					[
						'==',
						'!=',
						'===',
						'!==',
						'>',
						'>=',
						'<',
						'<='
					],
					[
						'&&',
						'||'
					],
					[
						'in',
						'instanceof'
					]
				],
				'allowSamePrecedence': false
			}
		],
		'no-lonely-if': 'off',
		'no-inline-comments': 'off',
		'no-continue': 'off',
		'no-bitwise': 'error',
		'no-array-constructor': 'error',
		'newline-per-chained-call': 'off',
		'newline-before-return': 'off',
		'newline-after-var': 'off',
		'new-parens': 'error',
		'new-cap': [
			'error',
			{
				'newIsCap': true,
				'newIsCapExceptions': [],
				'capIsNew': false,
				'capIsNewExceptions': [
					'Immutable.Map',
					'Immutable.Set',
					'Immutable.List'
				]
			}
		],
		'multiline-ternary': [
			'off',
			'never'
		],
		'multiline-comment-style': [
			'off',
			'starred-block'
		],
		'max-statements-per-line': [
			'off',
			{
				'max': 1
			}
		],
		'max-statements': [
			'off',
			10
		],
		'max-params': [
			'off',
			3
		],
		'max-nested-callbacks': 'off',
		'max-lines': [
			'off',
			{
				'max': 300,
				'skipBlankLines': true,
				'skipComments': true
			}
		],
		'max-len': 'off',
		'max-depth': [
			'off',
			4
		],
		'lines-around-directive': [
			'error',
			{
				'before': 'always',
				'after': 'always'
			}
		],
		'lines-around-comment': 'off',
		'lines-between-class-members': [
			'off',
			'always',
			{
				'exceptAfterSingleLine': false
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'line-comment-position': [
			'off',
			{
				'position': 'above',
				'ignorePattern': '',
				'applyDefaultPatterns': true
			}
		],
		'keyword-spacing': [
			'error',
			{
				'before': true,
				'after': true,
				'overrides': {
					'return': {
						'after': true
					},
					'throw': {
						'after': true
					},
					'case': {
						'after': true
					}
				}
			}
		],
		'key-spacing': [
			'error',
			{
				'beforeColon': false,
				'afterColon': true
			}
		],
		'jsx-quotes': [
			'off',
			'prefer-double'
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'id-match': 'off',
		'id-length': 'off',
		'id-blacklist': 'off',
		'function-paren-newline': [
			'error',
			'multiline'
		],
		'func-style': [
			'off',
			'expression'
		],
		'func-names': 'off',
		'func-name-matching': [
			'off',
			'always',
			{
				'includeCommonJSModuleExports': false
			}
		],
		'func-call-spacing': [
			'error',
			'never'
		],
		'eol-last': [
			'error',
			'always'
		],
		'consistent-this': 'off',
		'computed-property-spacing': [
			'error',
			'never'
		],
		'comma-style': [
			'error',
			'last'
		],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'capitalized-comments': [
			'off',
			'never',
			{
				'line': {
					'ignorePattern': '.*',
					'ignoreInlineComments': true,
					'ignoreConsecutiveComments': true
				},
				'block': {
					'ignorePattern': '.*',
					'ignoreInlineComments': true,
					'ignoreConsecutiveComments': true
				}
			}
		],
		'camelcase': 'off',
		'brace-style': [
			'error',
			'stroustrup',
			{
				'allowSingleLine': true
			}
		],
		'block-spacing': [
			'error',
			'always'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [
			'off',
			{
				'multiline': true,
				'minItems': 3
			}
		],
		'array-bracket-newline': [
			'off',
			'consistent'
		],
		'no-use-before-define': [
			'error',
			{
				'functions': false
			}
		],
		'no-unused-vars': [
			'error',
			{
				'vars': 'all',
				'args': 'after-used',
				'ignoreRestSiblings': true
			}
		],
		'no-undefined': 'off',
		'no-undef-init': 'error',
		'no-undef': 'error',
		'no-shadow-restricted-names': 'error',
		'no-shadow': 'off',
		'no-restricted-globals': 'off',
		'no-label-var': 'error',
		'no-delete-var': 'error',
		'no-catch-shadow': 'off',
		'init-declarations': 'off',
		'yield-star-spacing': [
			'error',
			'after'
		],
		'template-curly-spacing': 'error',
		'symbol-description': 'error',
		'sort-imports': [
			'off',
			{
				'ignoreCase': false,
				'ignoreMemberSort': false,
				'memberSyntaxSortOrder': [
					'none',
					'all',
					'multiple',
					'single'
				]
			}
		],
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'require-yield': 'error',
		'prefer-template': 'off',
		'prefer-spread': 'off',
		'prefer-rest-params': 'off',
		'prefer-reflect': 'off',
		'prefer-numeric-literals': 'off',
		'prefer-destructuring': 'off',
		'prefer-const': [
			'error',
			{
				'destructuring': 'any',
				'ignoreReadBeforeAssign': true
			}
		],
		'prefer-arrow-callback': 'off',
		'object-shorthand': 'off',
		'no-var': 'off',
		'no-useless-rename': [
			'error',
			{
				'ignoreDestructuring': false,
				'ignoreImport': false,
				'ignoreExport': false
			}
		],
		'no-useless-constructor': 'error',
		'no-useless-computed-key': 'error',
		'no-this-before-super': 'error',
		'no-restricted-imports': 'off',
		'no-new-symbol': 'error',
		'no-duplicate-imports': 'off',
		'no-dupe-class-members': 'error',
		'no-const-assign': 'error',
		'no-confusing-arrow': [
			'error',
			{
				'allowParens': true
			}
		],
		'no-class-assign': 'error',
		'generator-star-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'constructor-super': 'error',
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'arrow-parens': [
			'error',
			'always'
		],
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				'requireReturnForObjectLiteral': false
			}
		],
		'import/no-anonymous-default-export': [
			'off',
			{
				'allowArray': false,
				'allowArrowFunction': false,
				'allowAnonymousClass': false,
				'allowAnonymousFunction': false,
				'allowLiteral': false,
				'allowObject': false
			}
		],
		'import/no-named-default': 'error',
		'import/no-unassigned-import': 'off',
		'import/no-webpack-loader-syntax': 'error',
		'import/unambiguous': 'off',
		'import/no-internal-modules': [
			'off',
			{
				'allow': []
			}
		],
		'import/no-dynamic-require': 'off',
		'import/no-absolute-path': 'error',
		'import/max-dependencies': [
			'off',
			{
				'max': 10
			}
		],
		'import/no-restricted-paths': 'off',
		'import/prefer-default-export': 'error',
		'import/newline-after-import': 'off',
		'import/order': [
			'off',
			{
				'groups': [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index'
				],
				'newlines-between': 'never'
			}
		],
		'import/extensions': [
			'error',
			'always',
			{
				'js': 'never',
				'jsx': 'never'
			}
		],
		'import/no-namespace': 'off',
		'import/no-duplicates': 'error',
		'import/imports-first': 'off',
		'import/first': [
			'error',
			'absolute-first'
		],
		'import/no-nodejs-modules': 'off',
		'import/no-amd': 'error',
		'import/no-commonjs': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				'devDependencies': [
					'test/**',
					'tests/**',
					'spec/**',
					'**/__tests__/**',
					'test.{js,jsx}',
					'test-*.{js,jsx}',
					'**/*.{test,spec}.{js,jsx}',
					'**/jest.config.js',
					'**/webpack.config.js',
					'**/webpack.config.*.js',
					'**/rollup.config.js',
					'**/rollup.config.*.js',
					'**/gulpfile.js',
					'**/gulpfile.*.js',
					'**/Gruntfile{,.js}',
					'**/protractor.conf.js',
					'**/protractor.conf.*.js'
				],
				'optionalDependencies': false
			}
		],
		'import/no-deprecated': 'off',
		'import/no-named-as-default-member': 'error',
		'import/no-named-as-default': 'error',
		'import/export': 'error',
		'import/namespace': 'off',
		'import/default': 'off',
		'import/named': 'off',
		'import/no-unresolved': [
			2,
			{
				'commonjs': true
			}
		]
	},
	'env': {
		'node': true,
		'es6': true,
		'browser': true
	},
	'parserOptions': {
		'ecmaFeatures': {
			'generators': false,
			'objectLiteralDuplicateProperties': false
		},
		'sourceType': 'module',
		'ecmaVersion': 6,
		'experimentalObjectRestSpread': false
	},
	'plugins': [
		'import'
	],
	'settings': {
		'import/ignore': [
			'node_modules',
			'\\.(coffee|scss|css|less|hbs|svg|json)$'
		],
		'import/core-modules': [],
		'import/extensions': [
			'.js',
			'.jsx'
		],
		'import/resolver': {
			'node': {
				'extensions': [
					'.js',
					'.json'
				]
			}
		}
	}
}
