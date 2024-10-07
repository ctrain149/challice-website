module.exports = {
  root: true,
  env: { node: true, es6: true, es2021: true },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  extends: ['next', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 100 }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'error',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    "prettier/prettier": [
      "error",
      {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      }
    ]
  },
};
