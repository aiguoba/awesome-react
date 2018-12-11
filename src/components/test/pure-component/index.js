import React, { PureComponent } from 'react'

export default class PureComponentTest extends PureComponent {
  render() {
    const { name } = this.props
    console.log(name)
    return <div>{name}</div>
  }
}
