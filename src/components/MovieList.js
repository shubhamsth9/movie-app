import React from 'react';

const MovieList = (props) => {
    return(
        <>
            {props.movies.map((movie, index) => (
                <img className='card' src={movie.Poster} alt='movie-poster' />
            ))}
        </>
    )
}

export default MovieList;