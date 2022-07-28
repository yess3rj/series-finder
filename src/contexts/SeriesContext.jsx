import { createContext, useState } from 'react'

export const SeriesContext = createContext({
  series: []
})

function SeriesProvider({ children }) {
  const [series, setSeries] = useState([]);

  return <SeriesContext.Provider value={{ series, setSeries }}>{children}</SeriesContext.Provider>
}

export default SeriesProvider
