import React from 'react'
import Checkbox from '../../ui/Checkbox'

import './Filter.scss'

export const Filter = ({ filter, onFilterChange }) => {
  const checkboxGroup = [
    { label: 'Все', value: -1 },
    { label: 'Нет пересадок', value: 0 },
    { label: '1 пересадка', value: 1 },
    { label: '2 пересадки', value: 2 },
    { label: '3 пересадки', value: 3 }
  ]

  const onCheckboxChange = value => {
    onFilterChange(value)
  }

  const filterList = checkboxGroup.map(({ label, value }) =>
    <li key={label}>
      <Checkbox
        defaultCheck={filter.some(el => el === value)}
        label={label}
        value={value}
        onChange={onCheckboxChange}
      />
    </li>
  )

  return (
    <div className="filter card">
      <p className="title">Количество пересадок</p>
      <ul>{filterList}</ul>
    </div>
  )
}
