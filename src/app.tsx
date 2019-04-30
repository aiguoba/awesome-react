import React from 'react'

interface AppInterface {
	color: string
}

class App extends React.Component<AppInterface, {}> {
	render() {
		return (
			<div>
				<h1>React with Typescript</h1>
				<p>The color of this page is: {this.props.color}</p>
			</div>
		)
	}
}

export default App
