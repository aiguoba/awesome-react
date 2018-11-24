import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const wrapper = document.getElementById('root')
ReactDOM.render(<App />, wrapper)

module.hot && module.hot.accept()
