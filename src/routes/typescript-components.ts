import { lazy } from 'react'

export default [
	{
		name: '无状态组件',
		path: '/stateless',
		exact: true,
		component: lazy(() =>
			import(
				/* webpackChunkName: 'stateless'*/ 'pages/typescript-components/stateless'
			)
		)
	},
	{
		name: '有状态组件',
		path: '/stateful',
		exact: true,
		component: lazy(() =>
			import(
				/* webpackChunkName: 'stateful'*/ 'pages/typescript-components/stateful'
			)
		)
	}
]
