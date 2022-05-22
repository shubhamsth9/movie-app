import React, { useEffect, useState } from 'react';
import './App.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d253c28a`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  }
  
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return(
    <div className='container'>
      <div className='searchBar'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='movieList'>
        <MovieList movies = {movies} />
      </div>
    </div>
  )
}

export default App;