import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      prettier,
      'simple-import-sort': simpleImportSort
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      'prettier/prettier': ['warn', { endOfLine: 'auto' }, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'simple-import-sort/imports': 'error',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      'max-len': ['error', { ignoreComments: true, code: 120 }]
    },
    ignores: ['node_modules', '*.html', '*.md']
  }
];
