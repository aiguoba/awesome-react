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
