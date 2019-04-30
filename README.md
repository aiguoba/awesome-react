# 🌴Awesome-React (typescript)

## Use

- babel@7
- webpack@4
- typescript@3

## React 组件模式

### 无状态组件

```ts
import React, { MouseEvent, ReactNode, SFC } from 'react'

interface Props {
	onClick(e: MouseEvent<HTMLElement>): void
	text?: ReactNode
}

export const Stateless: SFC<Props> = ({ onClick: handleClick, text }) => (
	<div onClick={handleClick}>{text}</div>
)
```

### 有状态组件

```ts
import React, { Component } from 'react'
const initialState = {
	clickCount: 0
}

type State = Readonly<typeof initialState>

export default class Stateful extends Component<object, State> {
	readonly state: State = initialState

	private handleClick = () => {
		this.setState(preState => ({
			clickCount: preState.clickCount + 1
		}))
	}

	render() {
		const { clickCount } = this.state
		return <div onClick={this.handleClick}>Click Count {clickCount} </div>
	}
}
```
