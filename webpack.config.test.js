const devConfig = require('./webpack.config.development');

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: devConfig.module.loaders.slice(1)
  }
};
