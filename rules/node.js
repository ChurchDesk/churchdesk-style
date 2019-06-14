'use strict';

module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  plugins: ['node'],
  rules: {
    // Recommended rules:
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': ['error', {
      'allowModules': [],
      'resolvePaths': ['/path/to/a/modules/directory'],
      'tryExtensions': ['.js', '.json', '.node', '.ts']
    }],
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',
    'no-process-exit': 'error',

    'node/no-deprecated-api': 'error',
    'node/exports-style': ['error', 'module.exports'],

    // enforce return after a callback
    'callback-return': 'off',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'error',

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
    'no-sync': 'error',

    'newline-per-chained-call': 'off',

    'arrow-body-style': 'off',
  },
};
