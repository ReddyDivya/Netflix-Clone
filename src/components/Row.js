import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import axios from './axios';
import '../styles/Row.css';

const base_url = "https://image.tmdb.org/t/p/original/"; //TMDB movie url

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);//movies = [];
    const [trailerUrl, setTrailerUrl] = useState("");//trailerUrl = ""; 

    //A useEffect() hook code runs on special conditions
    useEffect(() => {

        // this snippet runs when the array is empty[], 
        // row gets loaded and don't run again[only on page load]

        async function fetchData() {
            const reponse = await axios.get(fetchUrl);//returns a Promise()
            //fetchUrl - value will be append to the url that we got from axios
            //https://api.themoviedb.org/3/{fetchUrl} 
            setMovies(reponse.data.results);//setting data.result to state variable i.e movies
            return reponse;//returning reponse
        }

        fetchData();//making call to fetch Data
    }, [fetchUrl])//this useEffect snippet runs whenever the fetchUrl array changes

    // Trailer video attributes
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    };

    //handleClick - to display trailer on movie click
    const handleClick = (movie) => {

        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))

                }).catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/*Several row posters */}

                {movies.map(movie => (
                    <img key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
        </div>
    );
}

export default Row;
