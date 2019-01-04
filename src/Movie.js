import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/********* Class Component *********/
// class Movie extends Component {

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component {

//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <img src={this.props.poster} alt="Movie poster" />
//     )
//   }
// }

// Stateless functional component: state가 없고 props만 있다
// componentWillMount, function, updateState 등이 필요없고, lifecycle도 없고 그냥 return만 하는 component
// 기존 class component(stateful)와 다른 점은, 클래스가 아니므로 this.props는 지우고 그냥 poster
/********* Functional Component *********/
function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="movie">
      <div className="movie-columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="movie-columns">
        <h1>{title}</h1>
        <div className="movie-genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="movie-synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="movie-poster" />
  )
}

function MovieGenre({genre}) {
  return (
    <span className="movie-genre">{genre} </span>
  )
}

// functional component에서 PropTypes 사용
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;