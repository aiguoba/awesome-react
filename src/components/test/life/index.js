import React, { Component } from 'react'

export default class Life extends Component {
  constructor() {
    super(...arguments)
    console.log(`constructor excute`)
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps excute`)
    return null
  }

  render() {
    console.log(`render excute`)
    return <div>react component cycle-life</div>
  }

  componentDidMount() {
    console.log(`componentDidMount`)
    setTimeout(() => {
      console.log('------')
      this.setState({
        test: '1'
      })
    }, 5000)
  }

  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate`)
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')

    return null
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`)
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate`)
  }
}
