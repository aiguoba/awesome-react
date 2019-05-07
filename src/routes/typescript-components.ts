import { lazy } from 'react'

export default [
	{
		name: '组件设计模式',
		path: '/component',
		component: lazy(() =>
			import(/* webpackChunkName: 'stateful'*/ 'pages/typescript-components')
		),
		routes: [
			{
				name: '无状态组件',
				path: '/component/stateless',
				component: lazy(() =>
					import(
						/* webpackChunkName: 'stateless'*/ 'pages/typescript-components/stateless'
					)
				)
			},
			{
				name: '有状态组件',
				exact: true,
				path: '/component/stateful',
				component: lazy(() =>
					import(
						/* webpackChunkName: 'stateful'*/ 'pages/typescript-components/stateful'
					)
				)
			}
		]
	}
]
