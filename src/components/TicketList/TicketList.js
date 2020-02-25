import React from 'react'

import Ticket from '../Ticket'

import './TicketList.scss'

export const TicketList = ({ tickets }) => {
  
  const list = tickets.slice(0, 5).map(({ price, carrier, segments }, i) =>
    <li key={`${i}-${carrier}-${price}`}>
      <Ticket
        price={price}
        carrier={carrier}
        segments={segments}
      />
    </li>
  )

  return (
    <ul className="ticket-list">
      {list}
    </ul>
  )
}
