module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  plugins: ['node'],
  rules: {
    'no-process-exit': 'error',
    'node/no-deprecated-api': 'warn',
    'node/no-missing-require': 'error',
    'node/no-unpublished-bin': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unsupported-features': ['error', {
      ignores: []
    }],

    // enforce return after a callback
    'callback-return': 'off',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 0, // TODO

    // disallow use of process.env
    'no-process-env': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',
  },
};
