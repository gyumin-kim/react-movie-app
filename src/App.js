import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Bohemian Rhapsody",
    poster: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "American Psycho",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/American_Psycho.png/220px-American_Psycho.png"
  },
  {
    title: "Before Sunrise",
    poster: "https://c-sf.smule.com/sf/s37/arr/86/02/3328f006-3ab6-4de7-ac01-4f6d31d97a25.jpg"
  }
]

// All components should have render() function and return!
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;