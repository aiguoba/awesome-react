;(window.webpackJsonp = window.webpackJsonp || []).push([
	[1],
	{
		43: function(e) {
			e.exports = {
				name: 'awesome-react',
				version: '1.1.0',
				description: 'awesome-react',
				author: 'Day <874288011@qq.com>',
				private: !0,
				main: 'index.js',
				scripts: {
					dev: 'npm start',
					start: 'webpack-dev-server --progress --config build/webpack.dev.js',
					build: 'webpack --config build/webpack.prod.js'
				},
				husky: { hooks: { 'pre-commit': 'pretty-quick --staged' } },
				dependencies: {
					react: '^16.8.6',
					'react-dom': '^16.8.6',
					'react-router': '^5.0.0',
					'react-router-config': '^5.0.0',
					'react-router-dom': '^5.0.0',
					'styled-jsx': '^3.2.1'
				},
				devDependencies: {
					'@babel/core': '^7.4.4',
					'@babel/plugin-proposal-class-properties': '^7.4.4',
					'@babel/plugin-proposal-decorators': '^7.4.4',
					'@babel/plugin-syntax-dynamic-import': '^7.2.0',
					'@babel/preset-env': '^7.4.4',
					'@babel/preset-react': '^7.0.0',
					'@babel/preset-typescript': '^7.3.3',
					'@types/react': '^16.8.15',
					'@types/react-dom': '^16.8.4',
					'@types/react-router': '^4.4.5',
					'@types/react-router-config': '^1.1.3',
					'@types/react-router-dom': '^4.3.2',
					'@types/styled-jsx': '^2.2.8',
					'@types/webpack-env': '^1.13.9',
					'@typescript-eslint/eslint-plugin': '^1.7.0',
					'@typescript-eslint/parser': '^1.7.0',
					address: '^1.1.0',
					'babel-eslint': '^10.0.1',
					'babel-loader': '^8.0.5',
					chalk: '^2.4.2',
					'clean-webpack-plugin': '^2.0.1',
					'copy-webpack-plugin': '^5.0.3',
					'cross-env': '^5.2.0',
					'css-loader': '^2.1.1',
					dotenv: '^7.0.0',
					eslint: '^5.16.0',
					'eslint-config-prettier': '^4.2.0',
					'eslint-loader': '^2.1.2',
					'eslint-plugin-react': '^7.12.4',
					'file-loader': '^3.0.1',
					'friendly-errors-webpack-plugin': '^1.7.0',
					'html-loader': '^0.5.5',
					'html-webpack-plugin': '^3.2.0',
					husky: '^2.1.0',
					'node-notifier': '^5.4.0',
					prettier: '^1.17.0',
					'pretty-quick': '^1.10.0',
					'progress-bar-webpack-plugin': '^1.12.1',
					'style-loader': '^0.23.1',
					tslib: '^1.9.3',
					typescript: '^3.4.5',
					'uglifyjs-webpack-plugin': '^2.1.2',
					'url-loader': '^1.1.2',
					webpack: '^4.30.0',
					'webpack-cli': '^3.3.1',
					'webpack-dev-server': '^3.3.1',
					'webpack-merge': '^4.2.1',
					webpackbar: '^3.2.0'
				}
			}
		},
		45: function(e, t, r) {
			'use strict'
			r.r(t),
				r.d(t, 'default', function() {
					return b
				})
			var n = r(0),
				o = r.n(n),
				c = r(43)
			function a(e) {
				return (a =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function(e) {
								return typeof e
						  }
						: function(e) {
								return e &&
									'function' == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? 'symbol'
									: typeof e
						  })(e)
			}
			function i(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r]
					;(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n)
				}
			}
			function p(e, t) {
				return !t || ('object' !== a(t) && 'function' != typeof t)
					? (function(e) {
							if (void 0 !== e) return e
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							)
					  })(e)
					: t
			}
			function s(e) {
				return (s = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function(e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			function l(e, t) {
				return (l =
					Object.setPrototypeOf ||
					function(e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			var u = c.dependencies,
				b = (function(e) {
					function t() {
						return (
							(function(e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function')
							})(this, t),
							p(this, s(t).apply(this, arguments))
						)
					}
					return (
						(function(e, t) {
							if ('function' != typeof t && null !== t)
								throw new TypeError(
									'Super expression must either be null or a function'
								)
							;(e.prototype = Object.create(t && t.prototype, {
								constructor: { value: e, writable: !0, configurable: !0 }
							})),
								t && l(e, t)
						})(t, n['Component']),
						(function(e, t, r) {
							t && i(e.prototype, t), r && i(e, r)
						})(t, [
							{
								key: 'render',
								value: function() {
									return o.a.createElement(
										o.a.Fragment,
										null,
										o.a.createElement('h2', null, 'Use'),
										o.a.createElement(
											'ul',
											null,
											Object.keys(u).map(function(e) {
												return o.a.createElement(
													'ol',
													{ key: e },
													e,
													': ',
													u[e]
												)
											})
										)
									)
								}
							}
						]),
						t
					)
				})()
		}
	}
])
