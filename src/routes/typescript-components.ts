import { lazy } from 'react'

export default [
	{
		path: '/stateless',
		exact: true,
		component: lazy(() =>
			import(
				/* webpackChunkName: 'stateless'*/ 'pages/typescript-components/stateless'
			)
		)
	},
	{
		path: '/stateful',
		exact: true,
		component: lazy(() =>
			import(
				/* webpackChunkName: 'stateful'*/ 'pages/typescript-components/stateful'
			)
		)
	}
]
