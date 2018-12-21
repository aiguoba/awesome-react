import React, { memo } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

export default memo(props => (
  <nav>
    <ul>
      <li>
        <Link to="/styled-jsx">StyledJSX</Link>
      </li>
      <li>
        <Link to="/pure">Pure</Link>
      </li>
      <li>
        <Link to="/memo">Memo</Link>
      </li>
      <li>
        <Link to="/life">Life</Link>
      </li>
    </ul>
  </nav>
))
