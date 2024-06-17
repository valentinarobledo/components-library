module.exports = {
	parser: '@babel/eslint-parser',
	extends: [
		'airbnb',
		'prettier',
	],
	plugins: [
		'react',
		'jsx-a11y',
		'import',
		'prettier',
	],
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
		version: 'detect',
		},
	},
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
		presets: ['@babel/preset-react'],
		},
	},
	rules: {
		'prettier/prettier': ['error'],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
	},
};
