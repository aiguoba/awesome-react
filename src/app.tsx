import React from 'react'
import { Stateless } from './components/stateless'
import Stateful from './components/stateful'
interface Props {}

class App extends React.Component<Props, {}> {
	render() {
		return (
			<div>
				<h1>React with Typescript</h1>
				<h2>Stateless</h2>
				<Stateless onClick={() => console.log(1)} text="Click Me" />
				<h2>Stateful</h2>
				<Stateful />
			</div>
		)
	}
}

export default App
