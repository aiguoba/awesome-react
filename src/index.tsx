import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

ReactDOM.render(<App color="Green" />, document.getElementById('root'))

/**
 * HMR Just For Development
 */
process.env.NODE_ENV !== 'production' && module.hot && module.hot.accept()
