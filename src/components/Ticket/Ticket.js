import React from 'react'

import { Segment } from './Segment'

import './Ticket.scss'

export const Ticket = ({ price = null, carrier = null, segments = [] }) => {
  const priceWithSpace = price => {
    const priceStr = price.toString()
    const divider = priceStr.length - 3

    return `${priceStr.slice(0, divider)} ${priceStr.slice(divider)}`
  }

  const segmentList = segments.map(({ origin, destination, date, duration, stops }) =>
    <Segment
      key={date}
      origin={origin}
      destination={destination}
      date={date}
      duration={duration}
      stops={stops}
    />
  )

  const companyLogo = carrier ? <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier}/> : null

  return (
    <div className="ticket card">
      <div className="header">
        <p className="price">{priceWithSpace(price)} Р</p>
        {companyLogo}
      </div>
      <div className="segments">
        {segmentList}
      </div>
    </div>
  )
}