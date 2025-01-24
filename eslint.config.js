module.exports = [
  {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
    ignorePatterns: ['dist', 'node_modules'],
    files: ['src/**/*.js', 'src/**/*.ts'],
  },
]
