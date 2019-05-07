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
				<h1>项目依赖</h1>
				<ol>
					{Object.keys(dependencies).map(dependency => (
						<li key={dependency}>
							{dependency}: {dependencies[dependency]}
						</li>
					))}
				</ol>
			</>
		)
	}
}
