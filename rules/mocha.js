'use strict';

module.exports = {
  env: {
    node: true
  },
  plugins: [
    'mocha'
  ],
  rules: {
    'mocha/no-exclusive-tests': 2,
    'mocha/no-mocha-arrows': 2, // http://mochajs.org/#arrow-functions
    'mocha/no-identical-title': 2
  }
}