import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <Link to="/"><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" /></Link>
        <Link to="/movies/popular" className='hover-underline-animation'>Popular</Link>
        <Link to="/movies/top_rated" className='hover-underline-animation'>Top Rated</Link>
        <Link to="/movies/upcoming" className='hover-underline-animation'>Upcoming</Link>
      </div>
    </div>
  )
}

export default Header
