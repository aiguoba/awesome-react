import { lazy } from 'react'
import typescriptComponentsRoutes from './typescript-components'

export default [
	{
		name: 'Home',
		navigate: false,
		path: '/',
		exact: true,
		component: lazy(() => import(/* webpackChunkName: 'index'*/ 'pages/index'))
	},
	{
		name: '依赖',
		path: '/dependencies',
		exact: true,
		component: lazy(() =>
			import(/* webpackChunkName: 'dependencies'*/ 'pages/dependencies')
		)
	},
	...typescriptComponentsRoutes,
	{
		path: '/404',
		navigate: false,
		exact: true,
		component: lazy(() => import(/* webpackChunkName: '404'*/ 'pages/404'))
	}
]
