const API_BASE = 'https://front-test.beta.aviasales.ru'

const apiRequest = async url => {
  try {
    const response = await fetch(`${API_BASE}${url}`)
    const body = await response.json()
    return body
  } catch (error) {
    throw new Error(`Could't fetch ${url}, received ${error}`)
  }
}

const fetchSearchId = async () => {
  const { searchId } = await apiRequest('/search')
  return searchId
}


export const fetchTickets = async () => {
  const searchId = await fetchSearchId()
  const { tickets } = await apiRequest(`/tickets?searchId=${searchId}`)
  return tickets
}