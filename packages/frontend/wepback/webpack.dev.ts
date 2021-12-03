const path = require('path');

import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common';

const webpackDev: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '../build'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },
};

module.exports = merge(webpackCommon, {
  ...webpackDev,
});
