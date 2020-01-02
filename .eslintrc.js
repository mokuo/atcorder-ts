module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise'
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    'import/prefer-default-export': 'off'
  }
};
