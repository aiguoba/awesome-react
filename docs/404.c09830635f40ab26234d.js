;(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		46: function(t, n, e) {
			'use strict'
			e.r(n),
				e.d(n, 'default', function() {
					return p
				})
			var o = e(0)
			function r(t) {
				return (r =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function(t) {
								return typeof t
						  }
						: function(t) {
								return t &&
									'function' == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? 'symbol'
									: typeof t
						  })(t)
			}
			function u(t, n) {
				for (var e = 0; e < n.length; e++) {
					var o = n[e]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o)
				}
			}
			function i(t, n) {
				return !n || ('object' !== r(n) && 'function' != typeof n)
					? (function(t) {
							if (void 0 !== t) return t
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							)
					  })(t)
					: n
			}
			function c(t) {
				return (c = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
					  })(t)
			}
			function f(t, n) {
				return (f =
					Object.setPrototypeOf ||
					function(t, n) {
						return (t.__proto__ = n), t
					})(t, n)
			}
			var p = (function(t) {
				function n() {
					return (
						(function(t, n) {
							if (!(t instanceof n))
								throw new TypeError('Cannot call a class as a function')
						})(this, n),
						i(this, c(n).apply(this, arguments))
					)
				}
				return (
					(function(t, n) {
						if ('function' != typeof n && null !== n)
							throw new TypeError(
								'Super expression must either be null or a function'
							)
						;(t.prototype = Object.create(n && n.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 }
						})),
							n && f(t, n)
					})(n, o['Component']),
					(function(t, n, e) {
						n && u(t.prototype, n), e && u(t, e)
					})(n, [
						{
							key: 'render',
							value: function() {
								return '404'
							}
						}
					]),
					n
				)
			})()
		}
	}
])
