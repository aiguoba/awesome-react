import React from 'react'
import { Stateless } from './components/stateless'

interface Props {
	color: string
}

class App extends React.Component<Props, {}> {
	render() {
		return (
			<div>
				<h1>React with Typescript</h1>
				<p>The color of this page is: {this.props.color}</p>
				<Stateless onClick={() => console.log(1)} text="Click Me" />
			</div>
		)
	}
}

export default App
