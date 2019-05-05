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
