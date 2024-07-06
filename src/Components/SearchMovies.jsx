import React, { useState } from 'react';

function SearchMovies() {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    setSearching(true);
    const url = `http://www.omdbapi.com/?&apikey=e1a73560&s=${query}&type="movie"`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMessage(null);
      setMovies(data.Search);
      setSearching(false);
    } catch (err) {
      setMessage('An unexpected error occured.');
      setSearching(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={searchMovies}>
        <input
          type="text"
          name="query"
          placeholder="Search movies by Name"
          value={query}
          required
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '80%',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#ff0000',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {searching &&!message? (
        <span>loading...</span>
      ) : message? (
        <div className="message">{message}</div>
      ) : (
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt="movie image" />
            <div>
              <p>
                Title: <span>{movie.Title}</span>
              </p>
              <p>
                Year of Release: <span>{movie.Year}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchMovies;