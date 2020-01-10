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
   handleDelete=(movie)=>{
     const movies=this.state.movies.filter((m)=>{
       return movie._id !== m._id
      
     })
     this.setState({movies})
   }
   handleLiked=(movie)=>{
 // console.log(movie)
    
     const movies=[...this.state.movies];
      const index=movies.indexOf(movie);
      movies[index]={...movies[index]};
      movies[index].liked=!movies[index].liked
      this.setState({movies})

   }
  render() {
    return (
      <main className="container">
      <h1>Movie APP</h1>
      <Movie  movies={this.state.movies} onDelete={this.handleDelete} onLiked={this.handleLiked}/>
    </main>
    )
  }
}
export default App


