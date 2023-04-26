import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./MovieList.css"
import { useParams } from 'react-router-dom'

function MovieList() {
    const [Movies,setMovies]=useState([]);
    const {type}=useParams();
    useEffect(()=>{
            getData();
    },[])
    useEffect(()=>{
        getData();
    },[type])

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=af80994bf2bf4a81b042fa2a7192002c&language=en-US`)
        .then(res=>res.json())
        .then(data=>setMovies(data.results));
    }
  return (
    <div className='movie__list'>
      <h2 className='list__title'>{(type?type:"POPULAR").toUpperCase()}</h2>
      <div className='list__cards'>
            {
                Movies.map(m=>(
                    <Card movie={m} key={m.id}/>
                ))
            }
      </div>
    </div>
  )
}

export default MovieList
