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
		<p>{color![0]}</p>
		<p>{text}</p>
	</div>
)
