import React from 'react'

import './ErrorIndicator.scss'

export const ErrorIndicator = ({ error }) => {
  return (
    <div className="error-indicator">
      Server error: {error.message} - {error.name}
    </div>
  )
}
