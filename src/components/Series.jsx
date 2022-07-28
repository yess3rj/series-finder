import { useContext } from 'react'
import { SeriesContext } from '../contexts/SeriesContext.jsx'

function Series() {
  const context = useContext(SeriesContext)
  const { series } = context
  return <div className="Series">
    <ul>
      {series.map((serie)=> <li key={serie.show.id} >{serie.show.name}</li>)}
    </ul>
  </div>
}

export default Series;
