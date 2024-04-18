import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moives, setMoives]= useState([])

  // const fetchMoiveHandler = ()=>{
  //   fetch('https://swapi.dev/api/films').then((res)=>{
  //     // console.log(res)
  //     return res
  //   }).then((res)=>{
  //     return res.json()
  //   }).then((res)=>{
      
    //   const transFormedMoives = res.results.map((moive)=>{
    //     return{
    //       id : moive.episode_id,
    //       title : moive.title,
    //       releaseDate : moive.release_date,
    //       openingText : moive.opening_crawl
          
    //     }
    //   })
    //   setMoives(transFormedMoives)
    // })

  // }


  const fetchMoiveHandler = async ()=>{

    const response =  await fetch('https://swapi.dev/api/films')
    console.log(response)
    const dataJson = await response.json()
    console.log(dataJson.results)

    const transFormedMoives = dataJson.results.map((moive)=>{
      return{
        id : moive.episode_id,
        title : moive.title,
        releaseDate : moive.release_date,
        openingText : moive.opening_crawl
        
      }
    })
    setMoives(transFormedMoives)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoiveHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moives} />
      </section>
    </React.Fragment>
  );
}

export default App;
