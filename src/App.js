import React, { Component } from 'react'
import Movie from './component/Movie';
import { getMovies}  from './services/fakeMovieService';
import './App.css';



 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       movies: getMovies(),
       pageSize:4,
       currentPage:1,
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
   handlePageChange=(page)=>{
     this.setState({currentPage:page})

   }
  render() {
    return (
      <main className="container">
      <h1>Movie APP</h1>
      <Movie  movies={this.state.movies} onDelete={this.handleDelete} onLiked={this.handleLiked}
      itemCount={this.state.movies.length}
      pageSize={this.state.pageSize}
      currentPage={this.state.currentPage}
      onPageChange={this.handlePageChange}/>
    </main>
    )
  }
}
export default App


