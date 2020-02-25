import React from 'react'

export const TabItem = ({ label, activeTab, children }) => {
  const classes = `tab-item ${activeTab === label ? 'active' : ''}`

  return (
    <div className={classes}>{children}</div>
  )
}
