const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'source-map',

  entry: ['./app/main.development'],

  // 'main.js' in root
  output: {
    path: __dirname,
    filename: './app/main.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false
  },
});
