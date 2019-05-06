# 🌴Awesome-React (typescript)

## Use

- babel@7
- webpack@4
- typescript@3
- [typo.css](https://typo.sofi.sh/)

## 参考文档

- [](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)

## React 组件模式

### 无状态组件

```ts
import React, { MouseEvent, ReactNode, SFC } from 'react'

interface Props {
	onClick(e: MouseEvent<HTMLElement>): void
	color?: Array<string>
	text?: ReactNode
}

export const Stateless: SFC<Props> = ({
	onClick: handleClick,
	color,
	text
}) => (
	<div onClick={handleClick}>
		{color![0]}
		{text}
	</div>
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

### 默认属性

```ts
import { ComponentType } from 'react'

export const withDefaultProps = <
	P extends object,
	DP extends Partial<P> = Partial<P>
>(
	defaultProps: DP,
	Cmp: ComponentType<P>
) => {
	type RequiredProps = Omit<P, keyof DP>
	type Props = Partial<DP> & Required<RequiredProps>

	Cmp.defaultProps = defaultProps

	return (Cmp as ComponentType<any>) as ComponentType<Props>
}
```

#### StatelessWithDefaultProps

```ts
import React, { SFC, ReactNode, MouseEvent } from 'react'
import { withDefaultProps } from '../utils/with-default-props'

const defaultProps = {
	color: ['red']
}

type DefaultProps = typeof defaultProps

type Props = {
	onClick(e: MouseEvent<HTMLElement>): void
	color?: Array<string>
	text?: ReactNode
} & DefaultProps

const Staless: SFC<Props> = ({ onClick: handleClick, color, text }) => (
	<div onClick={handleClick}>
		<p>{color![0]}</p>
		<p>{text}</p>
	</div>
)

export const StatelessWithDefaultProps = withDefaultProps(defaultProps, Staless)
```

#### StatefulWithDefaultProps

```ts
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
```
