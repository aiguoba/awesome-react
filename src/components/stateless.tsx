/*
 * @Author: Day
 * @Date: 2019-04-30 18:55:18
 * @Last Modified by: Day
 * @Last Modified time: 2019-04-30 18:55:56
 */

import React, { MouseEvent, ReactNode, SFC } from 'react'

interface Props {
	onClick(e: MouseEvent<HTMLElement>): void
	text?: ReactNode
}

export const Stateless: SFC<Props> = ({ onClick: handleClick, text }) => (
	<div onClick={handleClick}>{text}</div>
)
