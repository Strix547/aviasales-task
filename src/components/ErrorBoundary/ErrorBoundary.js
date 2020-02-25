import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMess: ''
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMess: error
    })
  }

  errorContainer = (
    <div className="error-container">
      {this.state.errorMess}
    </div>
  )

  render() {
    const { state, props, errorContainer } = this
    
    return state.hasError ? errorContainer : props.children
  }
}
