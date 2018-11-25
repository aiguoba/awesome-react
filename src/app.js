import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Test from '~/components/test'
import Store from './store'
const store = new Store()

@observer
export default class App extends Component {
  render() {
    return <Test store={store} />
  }
}
