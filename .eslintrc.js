module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    eqeqeq: 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
    'func-names': 'off',
  },
};
