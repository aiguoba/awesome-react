import React, { Component, Fragment } from 'react'
/** mobx */
import { observer } from 'mobx-react'
import MobxTest from '~/components/test/mobx'
import Store from './store'
const store = new Store()

/** styled-jsx */
import StyledJSX from '~/components/test/styled-jsx'

/** pure-component */
import PureComponentTest from '~/components/test/pure-component'
@observer
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <MobxTest store={store} /> */}
        {/* <StyledJSX /> */}
        <PureComponentTest name="day" />
      </Fragment>
    )
  }
}
