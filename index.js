module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/promise',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/mocha',
  ].map(require.resolve),
  rules: {
  },
};
