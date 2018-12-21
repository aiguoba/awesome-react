import React, { Component, Fragment } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import routes from "~/routes/routes"
import { renderRoutes } from "react-router-config"
export default class App extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return <Router>{renderRoutes(routes)}</Router>
  }
}
