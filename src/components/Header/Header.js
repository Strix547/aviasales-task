import React from 'react'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import './Header.scss'

export const Header = () => {
  return (
    <header>
      <div className="logo"><Logo /></div>
    </header>
  )
}
