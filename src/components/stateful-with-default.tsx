import React, { Component } from 'react'
import { withDefaultProps } from '../utils/with-default-props'

const initialState = {
	clickCount: 0
}

const defaultProps = {
	name: 'Stateless with default props'
}

type State = Readonly<typeof initialState>

type Props = {
	name?: string
}

class StatefulWithDefaultProps extends Component<Props, State> {
	readonly state: State = initialState

	private handleClick = () => {
		this.setState((preState: State) => ({
			clickCount: preState.clickCount + 1
		}))
	}

	public render() {
		const { clickCount } = this.state
		const { name } = this.props
		return (
			<div onClick={this.handleClick}>
				<p>default props params: {name}</p>
				Click Count {clickCount}
			</div>
		)
	}
}

export default withDefaultProps(defaultProps, StatefulWithDefaultProps)
