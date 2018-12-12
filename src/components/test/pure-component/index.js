import React, { PureComponent, Component } from 'react'

export default class PureComponentTest extends PureComponent {
  constructor() {
    super(...arguments)
    this.state = { age: 0 }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState)
  //   return true
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ age: 18 })
    }, 3000)
  }

  render() {
    const { name } = this.props
    const { age } = this.state
    return (
      <div>
        <div>name: {name}</div>
        <div>age: {age}</div>
      </div>
    )
  }
}
