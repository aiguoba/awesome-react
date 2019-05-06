import React, { Component } from 'react'
import pkg from '../../../package.json'

type dependencies = {
	[propName: string]: any
}

const dependencies: dependencies = pkg.dependencies

export default class Dependencies extends Component {
	render() {
		return (
			<>
				<h2>Use</h2>
				<ul>
					{Object.keys(dependencies).map(dependency => (
						<ol key={dependency}>
							{dependency}: {dependencies[dependency]}
						</ol>
					))}
				</ul>
			</>
		)
	}
}
