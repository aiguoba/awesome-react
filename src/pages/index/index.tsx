import React, { Component } from 'react'
import { withRouter } from 'react-router'
import routes from 'routes'

type route = {
	[propName: string]: any
}

type Props = {
	[propName: string]: any
}

function Home(props: Props) {
	console.log(props)
	const linkTo = (targetUrl: string) => props.history.push(targetUrl)

	return (
		<>
			<div className="wrapper typo">
				<h1>
					React with <i className="serif">TypeScript</i>
				</h1>
				<p id="theorem">
					Any application that can be written in JavaScript, will eventually be
					written in TypeScript.
				</p>

				<ol>
					{routes
						.filter((route: route) => route.navigate !== false)
						.map((route: route) => (
							<li key={route.path} onClick={linkTo.bind(null, route.path)}>
								<a>{route.name}</a>
								{(route.routes || []).length ? <ul>1</ul> : null}
							</li>
						))}
				</ol>
			</div>
			<style jsx>
				{`
					.wrapper {
						padding: 2% 10%;
					}
					.serif {
						color: #1abc9c;
					}
					#theorem {
						color: #999;
						font-size: 1.3em;
						padding: 0.8em 0;
						border-bottom: 3px double #eee;
					}
				`}
			</style>
		</>
	)
}

export default withRouter(Home as any)
