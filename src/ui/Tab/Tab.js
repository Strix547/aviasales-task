import React, { useState } from 'react'

import { TabNavBtn } from './TabNavBtn'

import './Tab.scss'

export const Tab = ({ children }) => {
  const getChildrenLabels = children => {
    return children.map(({ props }) => props.label)
  }

  const defaultTab = getChildrenLabels(children)[0]
  const [activeTab, setActiveTab] = useState(defaultTab)

  const renderNav = () => {
    return getChildrenLabels(children).map(label => (
      <TabNavBtn 
        key={label}
        label={label}
        activeTab={activeTab}
        onTabChange={label => setActiveTab(label)}
      />
    ))
  }

  return (
    <div className="tab">
      <div className="tab-nav">
        {renderNav()}
      </div>
      <div className="tab-content">
        {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
      </div>
    </div>
  )
}
