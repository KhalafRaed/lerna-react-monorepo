module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/strict', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'no-console': 'error',
    'no-eval': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'var', next: 'return' }
    ],
    'object-curly-spacing': ['error', 'always']
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  }
};
