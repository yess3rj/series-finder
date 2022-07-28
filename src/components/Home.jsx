import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import Magnify from 'mdi-material-ui/Magnify'
import { useState } from 'react'
import "./Home.css"
import axios from 'axios';
import { SeriesContext } from '../contexts/SeriesContext'

function Home() {
  const navigate = useNavigate();
  const context = useContext(SeriesContext)
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = async () => {
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
    context.setSeries(result.data);
    navigate('/series')
  }

  return (
    <div className="Home">
      <TextField id="outlined-basic" label="Search shows" variant="outlined" value={search} onChange={handleChange} />
      <IconButton onClick={handleClick}>
        <Magnify></Magnify>
      </IconButton>
    </div>
  )
}

export default Home;
