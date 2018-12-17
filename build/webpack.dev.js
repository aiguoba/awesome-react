const merge = require("webpack-merge")
const webpackBaseConfig = require("./webpack.base")
const webpack = require("webpack")

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 9527,
    open: true,
    hot: true,
    stats: "errors-only",
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
