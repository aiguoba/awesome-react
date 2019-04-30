# 🌴Awesome-React (typescript)

## Use

- babel@7
- webpack@4
- typescript@3

## React 组件模式

### 无状态组件

```ts
import React, { SFC, MouseEvent, ReactNode } from 'react'

type Props = {
	onClick(e: MouseEvent<HTMLElement>): void
	children?: ReactNode
}

export const Stateless: SFC<Props> = ({
	onClick: handleClick,
	children
}: Props) => <div onClick={handleClick}>{children}</div>
```
