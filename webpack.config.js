const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: ['node', 'es6'],
  entry: {
    'app': path.resolve(__dirname, 'build', 'app.js'),
  },
  plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })],
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: '[name].js',
  },
};
