const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['../dist'], {
      allowExternal: true,
      verbose: true
    })
  ]
})
