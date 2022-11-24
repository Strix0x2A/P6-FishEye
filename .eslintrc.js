module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb-base"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		indent: ["warn", "tab"],
		quotes: ["warn", "double"],
		"no-unused-vars": ["warn", { vars: "local" }],
		"no-tabs": ["warn", { allowIndentationTabs: true }],
	},
};
