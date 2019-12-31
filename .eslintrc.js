module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'node'
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true,
    'jest/globals': true
  }
};
