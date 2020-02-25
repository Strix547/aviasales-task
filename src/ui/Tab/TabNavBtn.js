import React from 'react'

export const TabNavBtn = ({ label, activeTab, onTabChange}) => {
  const classes = `tab-nav-btn title${activeTab === label ? ' active' : ''}`

  return (
    <button
      className={classes}
      onClick={() => onTabChange(label)}
    >
      {label}
    </button>
  )
}
