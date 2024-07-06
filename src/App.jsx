import React from 'react';

import './tailwind.css';
import SearchBar from './Components/SearchMovies';
import Header from './Components/Header';

function App() {
  const style = {
    backgroundImage: `url(${'C:\Users\matha\OneDrive\Desktop\moviesearch\moviesearch\src\maddy.jpg'})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="relative width-full">
      <div className="mx-auto overflow-hidden">
        <Header />
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
