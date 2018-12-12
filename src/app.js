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

/** memo */
import MemoTest from '~/components/test/memo'

@observer
export default class App extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      name: 'day'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'yang'
      })
    }, 4000)
  }

  render() {
    const { name } = this.state
    return (
      <Fragment>
        {/* <MobxTest store={store} /> */}
        {/* <StyledJSX /> */}
        <PureComponentTest name={name} />
        {/* <MemoTest name="day" /> */}
      </Fragment>
    )
  }
}
