import React, { memo } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import AppHeader from "~/components/common/header"

export default memo(({ route }) => (
  <Router>
    <>
      <AppHeader />
      {renderRoutes(route.routes)}
    </>
  </Router>
))
