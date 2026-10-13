import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  [globalIgnores(['**/dist/'])],
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  // jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      pluginReactHooks,
      '@perfectionist': perfectionist,
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/semi': 0,
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      'pluginReactHooks/rules-of-hooks': 'error',
      'pluginReactHooks/exhaustive-deps': 'warn',
      '@stylistic/indent': ['error', 2, { offsetTernaryExpressions: true, SwitchCase: 1 }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
      '@stylistic/block-spacing': 'error',
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/type-generic-spacing': ['error'],
      '@stylistic/type-annotation-spacing': ['error'],
      '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
      '@stylistic/spaced-comment': ['error', 'always', { block: { balanced: true } }],
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/space-infix-ops': ['error', { int32Hint: false, ignoreTypes: false }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/keyword-spacing': ['error', { before: true }],
      '@stylistic/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' }],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-child-element-spacing': 'error',
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never' }],
      '@stylistic/no-confusing-arrow': 'error',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      '@stylistic/no-tabs': ['error', { allowIndentationTabs: false }],
      '@stylistic/type-named-tuple-spacing': ['error'],
      '@stylistic/jsx-closing-bracket-location': 'error',
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-newline': ['error', { multiline: 'require', singleline: 'consistent' }],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      '@stylistic/jsx-function-call-newline': ['error', 'multiline'],
      '@stylistic/jsx-indent-props': ['error', 'first'],
      '@stylistic/jsx-max-props-per-line': ['error', { when: 'multiline' }],
      '@stylistic/jsx-newline': ['error', { prevent: true }],
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/quote-props': ['error', 'as-needed', { unnecessary: true }],
      '@stylistic/wrap-iife': ['error', 'outside'],
      '@stylistic/jsx-wrap-multilines': [
        'error', {
          declaration: 'parens',
          assignment: 'parens',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          logical: 'parens-new-line'
        }
      ],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/comma-style': 'error',
      '@stylistic/comma-dangle': 'error',
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': 'error',
      '@stylistic/object-curly-newline': ['error', { consistent: true }],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'alphabetical', // or "natural", "line-length"
          order: 'asc', // or "desc"
          ignoreCase: true,
          groups: [
            'shorthand-prop',
            'unknown',
            'multiline-prop',
            'callback'
          ],
          customGroups: [
            {
              groupName: 'callback',
              elementNamePattern: '^(on|handle)[A-Z].*'
            }
          ]
        }
      ]
    }
  },
  { settings: { react: { version: 'detect' } } }
]);
