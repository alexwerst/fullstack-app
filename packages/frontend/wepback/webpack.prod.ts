const path = require('path');

import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common';

const webpackProd: Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(webpackCommon, {
  ...webpackProd,
});
