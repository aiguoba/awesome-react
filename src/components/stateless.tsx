import React, { MouseEvent, ReactNode, SFC } from 'react'

interface Props {
	onClick(e: MouseEvent<HTMLElement>): void
	text?: ReactNode
}

export const Stateless: SFC<Props> = ({
	onClick: handleClick,
	text
}: Props) => <div onClick={handleClick}>{text}</div>
