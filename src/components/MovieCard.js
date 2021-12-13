import React from "react";

function MovieCard({ movie }) {
    return (
        <div className="MovieCardWrapper">
            <h2 className="MovieCardTitle">{movie.title}</h2>
            <div className="MovieCardBody"> 
                <div className="MovieCardText">
                    <p>Release Date: {movie ? movie.release_date: ''}</p>
                    <p>Director: {movie ? movie.director: ''}</p>
                    <p>Description: {movie ? movie.opening_crawl: ''}</p>
                </div>
            </div>
        </div>
    );
} 

export default MovieCard;