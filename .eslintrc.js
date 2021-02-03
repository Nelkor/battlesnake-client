module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'camelcase': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'space-infix-ops': 'error',
    'no-return-assign': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'no-trailing-spaces': 2,
    'curly': ['error', 'all'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'quotes': ['error', 'single'],
    'max-len': ['error', { code: 80 }],
    'quote-props': ['error', 'consistent-as-needed'],
    'linebreak-style': ['error', 'unix'],
    'padded-blocks': ['error', 'never'],
    'no-use-before-define': 'error',
    'no-unused-expressions': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-in-parens': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'multiline'],
    'array-bracket-newline': ['error', { multiline: true }],
    'brace-style': ['error', '1tbs'],
    'object-shorthand': [
      'error', 'always', {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['let', 'const'], next: '*' },
      { blankLine: 'any', prev: ['let', 'const'], next: ['let', 'const'] },
      { blankLine: 'always', prev: ['if'], next: ['*'] },
      { blankLine: 'always', prev: ['*'], next: ['if'] },
    ],

    'vue/html-indent': ['error', 2],
    'vue/no-multi-spaces': 'error',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error', {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/tests/unit/**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
}
