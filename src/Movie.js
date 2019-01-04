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

/********* Functional Component *********/
function Movie({title, poster}) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

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
function MoviePoster({poster}) {
  return (
    <img src={poster} alt="Movie poster" />
  )
}

// functional component에서 PropTypes 사용
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;