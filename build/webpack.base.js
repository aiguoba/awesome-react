require('dotenv').config()
const { resolve, join } = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BUILD_ENV } = process.env

module.exports = {
	entry: resolve(__dirname, '../src/index.tsx'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'~': resolve(__dirname, '..', 'src'),
			layouts: resolve(__dirname, '..', 'src/layouts'),
			assets: resolve(__dirname, '..', 'src/assets'),
			components: resolve(__dirname, '..', 'src/components'),
			pages: resolve(__dirname, '..', 'src/pages'),
			utils: resolve(__dirname, '..', 'src/utils')
		},
		mainFiles: ['index']
	},
	output: {
		path: join(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new WebpackBar(),
		new CopyPlugin([
			{
				from: resolve(__dirname, '../static'),
				to: resolve(__dirname, '../dist/static')
			}
		]),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(BUILD_ENV)
		}),
		new HtmlWebpackPlugin({
			title: 'TypeScript + React',
			filename: 'index.html',
			template: resolve(__dirname, '../src/index.html'),
			minify: {
				removeRedundantAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeComments: true,
				collapseBooleanAttributes: true
			},
			favicon: ''
		})
	]
}
