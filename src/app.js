import React, { Component } from 'react'
import { observer } from 'mobx-react'
import MobxTest from '~/components/mobx-test'
import Store from './store'
const store = new Store()

@observer
export default class App extends Component {
  render() {
    return <MobxTest store={store} />
  }
}
