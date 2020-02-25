import React, { useState, useEffect } from 'react'

import Header from '../Header'
import Filter from '../Filter'
import TicketList from '../TicketList'
import Loader from '../Loader'
import { Tab, TabItem } from '../../ui/Tab'
import { fetchTickets } from '../../services/api'

import './App.scss'
import ErrorIndicator from '../ErrorIndicator'

function App() {
  const [tickets, setTickets] = useState([])
  const [filter, setFilter] = useState([-1])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTickets()
      .then(data => setTickets(data))
      .catch(error => setError(error))
  }, [])

  if (error) return <ErrorIndicator error={error} />
  if (!tickets.length) return <Loader />

  const onFilterChange = value => {
    if (filter.some(el => value === el)) {
      setFilter(filter.filter(el => el !== value))
    } else {
      setFilter([...filter, value])
    }
  }

  const isAllFilterSelected = filter.some(el => el === -1 )
  const stopFilter = tickets.filter(({ segments }) => segments.every(segment => filter.some(el => el === segment.stops.length)))
  const ticketsWithFilter = isAllFilterSelected ? tickets : stopFilter

  const cheapestTicketsWithFilter = ticketsWithFilter.slice().sort((a, b) => a.price - b.price)
  const fastestTicketsWithFilter = ticketsWithFilter.slice().sort((a, b) => {
    const getMinDuration = arr => {
      return arr.sort((a, b) => a.duration - b.duration)[0].duration
    }
    return getMinDuration(a.segments) - getMinDuration(b.segments)
  })

  return (
    <div className="app">
      <Header />

      <main>
        <div className="wrapper">
          <Filter filter={filter} onFilterChange={onFilterChange} />

          <Tab>
            <TabItem label="Самый дешевый">
              <TicketList tickets={cheapestTicketsWithFilter} />
            </TabItem>
            <TabItem label="Самый быстрый">
              <TicketList tickets={fastestTicketsWithFilter} />
            </TabItem>
          </Tab>
        </div>
      </main>
    </div>
  )
}

export default App
