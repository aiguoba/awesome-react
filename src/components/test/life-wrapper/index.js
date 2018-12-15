import React, { Component } from 'react'
import Life from '../life'
export default class Life extends Component {
  constructor() {
    super(...arguments)
    console.log(`<wrapper>constructor excute`)
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`<wrapper>getDerivedStateFromProps excute`)
    return null
  }

  render() {
    console.log(`<wrapper>render excute`)
    return (
      <div>
        <Life />
      </div>
    )
  }

  componentDidMount() {
    console.log(`<wrapper>componentDidMount`)
    setTimeout(() => {
      console.log('------')
      this.setState({
        test: '1'
      })
    }, 5000)
  }

  shouldComponentUpdate() {
    console.log(`<wrapper>shouldComponentUpdate`)
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('<wrapper>getSnapshotBeforeUpdate')

    return null
  }

  componentWillUnmount() {
    console.log(`<wrapper>componentWillUnmount`)
  }

  componentDidUpdate() {
    console.log(`<wrapper>componentDidUpdate`)
  }
}
