import React, { Component } from 'react'
import routes from 'routes'

type route = {
	[propName: string]: any
}

export default class Home extends Component {
	render() {
		return (
			<div className="wrapper typo">
				<h1>
					React with <i className="serif">TypeScript</i>
				</h1>
				<p id="theorem">
					Any application that can be written in JavaScript, will eventually be
					written in TypeScript.
				</p>

				<ol>
					{routes.map((route: route) =>
						route.navigate !== false ? (
							<li key={route.path}>
								<a>{route.name}</a>
							</li>
						) : null
					)}
				</ol>

				<style jsx>
					{`
						.wrapper {
							padding: 5% 10%;
						}
						.serif {
							color: #1abc9c;
						}
						#theorem {
							color: #999;
							font-size: 1em;
							padding: 1em 0 1em 0;
							border-bottom: 3px double #eee;
						}
					`}
				</style>
			</div>
		)
	}
}
