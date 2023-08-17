module.exports = {
  root: true,
  env: { node: true, es6: true, es2021: true },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  plugins: ['prettier'],
  extends: ['next', 'eslint:recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 90 }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-trailing-spaces': 'error',
    quotes: [2, 'single', { avoidEscape: true }],
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
  },
};
