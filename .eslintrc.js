module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  env: {
    node: true,
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 'error',
    'newline-per-chained-call': 'error',
    'no-console': 'warn',
  },
};
