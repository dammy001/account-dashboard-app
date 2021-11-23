module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],
    'max-len': ['warn', { code: 120 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    camelcase: 'off',
    eqeqeq: 'error',
    'require-await': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-undef': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-redeclare': 'off',
  },
};
