import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'

interface Props extends RouteConfig {}

export default class TypeScriptComponent extends Component<Props> {
	render() {
		const route: RouteConfig = this.props.route
		console.log(route.routes)

		return (
			<>
				<h2>Component</h2>
				<Switch>{renderRoutes(route.routes)}</Switch>
			</>
		)
	}
}
