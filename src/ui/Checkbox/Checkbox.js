import React, { useState } from 'react'

import { ReactComponent as Check } from '../../assets/icons/check.svg'

import './Checkbox.scss'

export const Checkbox = ({ defaultCheck = false, label, value, onChange }) => {
  const [checked, setChecked] = useState(defaultCheck)
  const classes = checked ? 'checkbox checked' : 'checkbox'

  const onCheckboxChange = value => {
    setChecked(!checked)
    onChange(value)
  }

  return (
    <label htmlFor={label} className={classes}>
      <div className="checkmark">
        {checked ? <Check /> : null}
      </div>
      <input type="checkbox" id={label} checked={checked} onChange={() => onCheckboxChange(value)} />
      {label}
    </label>
  )
}
