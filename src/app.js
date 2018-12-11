import React, { Component, Fragment } from 'react'
/** mobx */
import { observer } from 'mobx-react'
import MobxTest from '~/components/test/mobx'
import StyledJSX from '~/components/test/styled-jsx'
import Store from './store'
const store = new Store()

/** styled-jsx */

@observer
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <MobxTest store={store} /> */}
        <StyledJSX />
      </Fragment>
    )
  }
}
