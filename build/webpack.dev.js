const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 9527,
    open: true,
    hot: true,
    stats: 'errors-only',
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
