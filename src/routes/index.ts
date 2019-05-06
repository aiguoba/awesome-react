import { lazy } from 'react'
import typescriptComponentsRoutes from './typescript-components'

export default [
	{
		path: '/',
		exact: true,
		component: lazy(() => import(/* webpackChunkName: 'index'*/ 'pages/index'))
	},
	...typescriptComponentsRoutes,
	{
		path: '/dependencies',
		exact: true,
		component: lazy(() =>
			import(/* webpackChunkName: 'dependencies'*/ 'pages/dependencies')
		)
	},
	{
		path: '/404',
		exact: true,
		component: lazy(() => import(/* webpackChunkName: '404'*/ 'pages/404'))
	}
]
