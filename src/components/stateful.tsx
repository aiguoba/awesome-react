/*
 * @Author: Day
 * @Date: 2019-04-30 18:56:01
 * @Last Modified by: Day
 * @Last Modified time: 2019-04-30 19:08:41
 */
import React, { Component } from 'react'
const initialState = {
	clickCount: 0
}

type State = Readonly<typeof initialState>

export default class Stateful extends Component<object, State> {
	readonly state: State = initialState

	handleClick = () => {
		this.setState(preState => ({
			clickCount: preState.clickCount + 1
		}))
	}

	render() {
		const { clickCount } = this.state
		return <div onClick={this.handleClick}>Click Count {clickCount} </div>
	}
}
