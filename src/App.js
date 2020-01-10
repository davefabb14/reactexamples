import React, { Component } from 'react'
import Movie from './component/Movie';
import { getMovies}  from './services/fakeMovieService';
import './App.css';



 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       movies: getMovies(),
     }
   }
  render() {
    return (
      <main className="container">
      <h1>Movie APP</h1>
      <Movie  movies={this.state.movies}/>
    </main>
    )
  }
}
export default App


