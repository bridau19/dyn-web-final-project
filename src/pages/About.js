import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Home() {
    const [movieData, setMovieData] = useState();

    const URL = `https://swapi.dev/api/films/`;

    useEffect(() => { // get movie info
        if (!movieData) {
            axios
            .get(URL)
            .then(response => {
                setMovieData(response.data);
            })
            .catch(function(error) {
                console.warn(error);
            });
        }
    }, [URL, movieData]);

    return (
        <main className="PageWrapper">
            <header>
                <h1>About this site</h1>
                <p>This is a site for fans of the older Star Wars movies to get together and discuss the best Star Wars films! Below you'll find descriptions of the first six movies to remind you of the good ones :D </p>
            </header>

            <div className="Movies"> 
                <br></br>
                <h2>Movie List</h2>
                {movieData && movieData['results'].map((movie, i) => (
                    <MovieCard movie={movie} key={i}/>
                ))}
            </div>
        </main>
    );
}

export default Home;