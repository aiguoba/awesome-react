# 有状态组件

```js
import React, { Component } from 'react'

const initialState = {
	clickCount: 0
}

type State = Readonly<typeof initialState>

export default class Stateful extends Component<object, State> {
	readonly state: State = initialState

	private handleClick = () => {
		this.setState((preState: State) => ({
			clickCount: preState.clickCount + 1
		}))
	}

	public render() {
		const { clickCount } = this.state
		return <div onClick={this.handleClick}>Click Count {clickCount} </div>
	}
}
```
