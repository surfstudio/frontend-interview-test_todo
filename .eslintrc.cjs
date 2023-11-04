module.exports = {
	env: {
		browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
		jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
		node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
	},
	extends: [
		'react-app', // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
		'eslint:recommended', // Use the recommened rules from eslint
		'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
		'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
		'prettier', // Use eslint-config-prettier to disable ESLint formatting rules from @typescript-eslint/eslint-plugin that would conflict with Prettier ( starting from version 8.0.0, the rule set for TypeScript files has been consolidated into the main  "prettier"  configuration. )
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
	],
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
		sourceType: 'module', // Allows for the use of imports
	},
	plugins: [
		'@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
		'prettier', // Allows for manually setting prettier/* rules
		'react', // Allows for manually setting react/* rules
		'react-refresh', // rule enforces that each file containing JSX or React components should only export components and not any other variables or functions
	],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
};
