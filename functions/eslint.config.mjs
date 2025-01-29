import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser, parserOptions: { ecmaVersion: 'latest', sourceType: 'module'}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: [2, 'always'],
      quotes: [2, 'single'],
      '@typescript-eslint/semi': 0
      }
  },
  {settings: {react: {version: 'detect'}}}
];
