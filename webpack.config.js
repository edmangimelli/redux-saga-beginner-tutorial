var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'source-map',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: ['babel-loader'],
      }
    ]
  },
};

module.exports = config;
