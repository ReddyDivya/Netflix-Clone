import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        //this snippet runs when the array is empty[], row gets loaded and don't run again[only on page load]
        
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            //request.fetchNetflixOriginals - value will be append to the url that we got from axios
            //https://api.themoviedb.org/3/{request.fetchNetflixOriginals} 
            
            console.log(request.data.results);//this is an array
            //but we want to display only a random netflix originals
            
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);//we get one movie randomly
            
            return request;
        }
        
        fetchData();
    }, [])//this snippet runs whenever the fetchUrl array changes

  function truncate(str, n) { //truncate the description if exceeds the 'n' limit
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{backgroundSize:"cover",
      /*backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,*/
      backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
      backgroundPosition: "center center"}}> 

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
