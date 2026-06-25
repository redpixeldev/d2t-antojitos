import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		// Build artefacts and generated types — never lint these.
		ignores: ['dist/', '.astro/', 'node_modules/'],
	},
	tailwind.configs.recommended, // v4: a single flat-config object (push, don't spread)
	...eslintPluginAstro.configs.recommended,
	{
		// The Astro preset only wires the TS parser for .astro files; cover plain .ts/.tsx too.
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: { sourceType: 'module' },
		},
	},
	{
		settings: {
			tailwindcss: {
				// v4 default is src/style.css; point it at THIS project's entry:
				cssConfigPath: 'src/styles/main.css',
			},
		},
	},
];
