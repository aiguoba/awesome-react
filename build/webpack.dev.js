const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.base')

module.exports = merge(WebpackBaseConfig, {
  mode: 'development',
  devServer: {
    open: true
  }
})
