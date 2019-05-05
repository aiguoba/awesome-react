import React from 'react'
import { Stateless } from './components/stateless'
import Stateful from './components/stateful'
import { StatelessWithDefaultProps } from './components/stateless-with-default'
import StatefulWithDefaultProps from 'components/stateful-with-default'
interface Props {}

class App extends React.Component<Props, {}> {
	render() {
		return (
			<div>
				<h1>React with Typescript</h1>
				<h2>Stateless</h2>
				<Stateless
					onClick={() => alert('Click')}
					text="Click Me"
					color={['green (get from props)']}
				/>
				<h2>Stateful</h2>
				<Stateful />
				<h2>Stateless with default props</h2>
				<StatelessWithDefaultProps
					onClick={() => alert('Click')}
					text="Click Me"
				/>
				<h2>Stateful with default props</h2>
				<StatefulWithDefaultProps />
			</div>
		)
	}
}

export default App
