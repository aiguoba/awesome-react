const path = require('path')
const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(WebpackBaseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      exclude: ['shared.js'],
      verbose: true,
      dry: false
    })
  ]
})
