'use strict';

module.exports = {
  env: {
    node: true
  },
  plugins: [
    'promise'
  ],
  rules: {
    'promise/param-names': 2,
    'promise/always-return': 0, // Has false positves.
    'promise/catch-or-return': 2,
    'promise/no-native': 0,
  }
}