module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'import-helpers', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^express/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'linebreak-style': 'off',
    'comma-spacing': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-trailing-spaces': 2,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': 'off',
  },
};
