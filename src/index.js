import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/fonts.scss'
import './index.scss'
import './assets/styles/core.scss'

import ErrorBoundary from './components/ErrorBoundary'
import App from './components/App'


ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  , 
  document.getElementById('root')
)
