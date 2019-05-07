;(window.webpackJsonp = window.webpackJsonp || []).push([
	[2],
	{
		44: function(e, a, t) {
			'use strict'
			t.r(a)
			var n = t(12),
				l = t.n(n),
				r = t(0),
				s = t.n(r),
				c = t(2),
				i = t(16)
			a.default = Object(c.g)(function(a) {
				function t(e) {
					return a.history.push(e)
				}
				return s.a.createElement(
					s.a.Fragment,
					null,
					s.a.createElement(
						'div',
						{ className: 'jsx-419614130 wrapper typo' },
						s.a.createElement(
							'h1',
							{ className: 'jsx-419614130' },
							'React with ',
							s.a.createElement(
								'i',
								{ className: 'jsx-419614130 serif' },
								'TypeScript'
							)
						),
						s.a.createElement(
							'p',
							{ id: 'theorem', className: 'jsx-419614130' },
							'Any application that can be written in JavaScript, will eventually be written in TypeScript.'
						),
						s.a.createElement(
							'ol',
							{ className: 'jsx-419614130' },
							i.a
								.filter(function(e) {
									return !1 !== e.navigate
								})
								.map(function(e) {
									return s.a.createElement(
										'li',
										{
											key: e.path,
											onClick: (e.routes || []).length
												? function() {}
												: t.bind(null, e.path),
											className: 'jsx-419614130'
										},
										s.a.createElement(
											'a',
											{ className: 'jsx-419614130' },
											e.name
										),
										(e.routes || []).length
											? s.a.createElement(
													'ul',
													{ className: 'jsx-419614130' },
													e.routes.map(function(e) {
														return s.a.createElement(
															'li',
															{
																key: e.path,
																onClick: t.bind(null, e.path),
																className: 'jsx-419614130'
															},
															s.a.createElement(
																'a',
																{ className: 'jsx-419614130' },
																e.name
															)
														)
													})
											  )
											: null
									)
								})
						)
					),
					s.a.createElement(
						l.a,
						{ id: '419614130' },
						'.wrapper.jsx-419614130{padding:2% 10%;}.serif.jsx-419614130{color:#1abc9c;}#theorem.jsx-419614130{color:#999;font-size:1.3em;padding:0.8em 0;border-bottom:3px double #eee;}'
					)
				)
			})
		}
	}
])
