import React, { useState, useEffect } from 'react';//hooks
import axios from './axios';//3rd party library
import request from './request';
import '../styles/Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";//TMDB movie url

function Banner() {
  const [movie, setMovie] = useState([]);//empty array is a initial value to movie state variable

  useEffect(() => {
    //this snippet runs when the array is empty[], 
    //row gets loaded and don't run again[only runs on a page load]

    async function fetchData() {
      const res = await axios.get(request.fetchNetflixOriginals);
      //request.fetchNetflixOriginals - value will be append to the url that we got from axios
      //https://api.themoviedb.org/3/{request.fetchNetflixOriginals} 

      console.log(res.data.results);//this is an array
      //but we want to display only a random netflix originals
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);//we get one movie randomly

      return res;
    }

    fetchData();//calling fetchData to get Netflix Original
  }, [])//2nd parameter is optional, this (useEffect)snippet runs whenever the fetchUrl array changes

  //truncates the description if exceeds the 'n' certain limit
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        /*backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,*/
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}>

      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
        <div className="banner_fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner;
