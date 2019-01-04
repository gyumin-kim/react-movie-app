import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// All components should have render() function and return!
class App extends Component {

  // Component의 state가 바뀔 때마다, render()가 trigger된다
  state = {

  }

  // Component가 갖고 있는 functions
  /**
   * Render: componentWillMount() -> render() -> componentDidMount()
   */
  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    // Component의 key로 index를 사용하는 것은 느리다
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
        key={movie.id} />
    })
    return movies;
  };

  // await를 쓰려면 바깥에 async가 있어야 한다
  _getMovies = async () => {
    const movies = await this._callApi();
    // await: 위 문장이 끝나기 전까지는(성공하든 실패하든) setState가 실행되지 않는다
    this.setState({
      // movies: movies와 같다. (이름이 같은 경우)
      movies
    })
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.err(err))
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App-loading'}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

  /**
   * Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
   */
  // componentWillReceiveProps(): 컴포넌트가 새로운 prop을 받았다
  // shouldComponentUpdate(): 컴포넌트의 기존 prop에서 변경된 것이 있으면 'update == true'로 설정
  // componentWillUpdate(): 'update == true'이면 update를 할 것이다.
}

export default App;