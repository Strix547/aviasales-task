import React from 'react'

export const Segment = ({ origin, destination, date, duration, stops }) => {

  const displayDuration = minutes => {
    const timeWithZero = number => number.toString().length === 1 ? `0${number}` : number

    const hours = timeWithZero(parseInt(minutes / 60))
    const mins = timeWithZero(minutes % 60)

    return `${hours}ч ${mins}м`
  }

  const getTimeFromDate = date => new Date(date).toTimeString().slice(0, 5)

  const dateObj = new Date(date)
  const fromTime = getTimeFromDate(dateObj)
  const endTime = getTimeFromDate(new Date(dateObj.setMinutes(dateObj.getMinutes() + duration)))

  const stopsLable = stopsCount => {
    switch (stopsCount) {
      case 0:
        return 'Без пересадок'
      case 1:
        return '1 пересадка'
      case 2:
      case 3:
      case 4:
        return `${stopsCount} пересадки`
      default:
        return `${stopsCount} пересадок`
    }
  }

  const stopList = stops.length ? stops.reduce((a, b) => `${a}, ${b}`) : null

  return (
    <div className="flight">
      <div className="route">
        <p className="title">{origin} - {destination}</p>
        <p className="text">{fromTime} - {endTime}</p>
      </div>
      <div className="length">
        <p className="title">В пути</p>
        <p className="text">{displayDuration(duration)}</p>
      </div>
      <div className="stops">
        <p className="title">{stopsLable(stops.length)}</p>
        <p className="text">{stopList}</p>
      </div>
    </div>
  )
}