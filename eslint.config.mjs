import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser, parserOptions: { ecmaVersion: 'latest', sourceType: 'module'}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      pluginReactHooks,
    },
    rules: {
      "pluginReactHooks/rules-of-hooks": "error",
      "pluginReactHooks/exhaustive-deps": "warn",
      semi: [2, 'always'],
      '@typescript-eslint/semi': 0
      }
  },
  {settings: {react: {version: 'detect'}}}
];
