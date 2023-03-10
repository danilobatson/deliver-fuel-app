module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  root: true,
};
