import React, { Component, Fragment } from "react"
import AppRouter from "~/routes"

export default class App extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <>
        <h2>React</h2>
        <AppRouter />
      </>
    )
  }
}
