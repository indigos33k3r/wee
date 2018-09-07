module.exports = {
	extends: 'airbnb-base',
	plugins: [
		'import'
	],
	settings: {
		'import/resolver': {
			webpack: {
				config: './build/webpack.dev.config.js'
			}
		}
	},
	rules: {
		indent: ['error', 4],
		'eol-last': 0,
		'no-plusplus': 0,
		'prefer-template': 0,
		'import/prefer-default-export': 0,
		'space-unary-ops': 0,
		'newline-per-chained-call': 0,
		radix: 0,
		'no-param-reassign': [
			'error',
			{
				ignorePropertyModificationsFor: [
					'state'
				]
			}
		]
	}
}
