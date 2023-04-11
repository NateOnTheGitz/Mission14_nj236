import React from 'react';
import Header from '../Header';
import MovieList from '../movie/MovieList';

function App() {
  return (
    <div className="App">
      <Header slogan="Joel Hilton Movie Site - Main" />
      <MovieList />
    </div>
  );
}

export default App;
