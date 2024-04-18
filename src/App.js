import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moives, setMoives] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

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
  

  const fetchMoiveHandler =  useCallback( async () => {
    setLoader(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong ..retrying");
      }
      const dataJson = await response.json();
      console.log(dataJson.results);

      const transFormedMoives = dataJson.results.map((moive) => {
        return {
          id: moive.episode_id,
          title: moive.title,
          releaseDate: moive.release_date,
          openingText: moive.opening_crawl,
        };
      });
      setMoives(transFormedMoives);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setInterval(() => {
        fetchMoiveHandler ()
      }, 5000);
    }
    setLoader(false);
  },[])

  useEffect(()=>{
    fetchMoiveHandler()
  },[fetchMoiveHandler])
  

  let content = <p>found no moive</p>;

  if (moives.length > 0) {
    content = <MoviesList movies={moives} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loader) {
    content = (
      <div>
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoiveHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* { !loader  && moives.length>0 && <MoviesList movies={moives} />}
        { !loader  && moives.length===0 && !error && <p>no moives founds</p>}
        {!loader && error && <p>{error}</p>}
        { loader && <div><span className="loader"></span></div>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
