import React, { memo } from 'react'

const MemoTest = memo(({ name }) => <div>{name}</div>)

export default MemoTest
