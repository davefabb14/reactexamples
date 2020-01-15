import React, { Component } from 'react'
import Movie from './component/Movie';
import { getMovies}  from './services/fakeMovieService';
import {getGenres}  from './services/fakeGenreService';
import './App.css';



 class App extends Component {
   
   constructor(props){
     super(props)
     this.state={
       movies: [],
       genre:[],
       selectedGenre:null,
       pageSize:4,
       currentPage:1,
       sortedColumn:{path:'title',order:'asc'}
     }
   }
   componentDidMount(){
     this.setState({movies:getMovies(),genre:[{_id:"" ,name:"All Genre"},...getGenres()]})
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
   handleOnSelectedItem=(genre)=>{
     
     this.setState({selectedGenre:genre ,currentPage:1})

   }
   handleSort=(path)=>{
     const sortedColumn={...this.state.sortedColumn};
    if(sortedColumn.path===path)
    {
       sortedColumn.order= sortedColumn.order=== "asc"?"desc":"asc"
    }
       else{

        sortedColumn.path=path
        sortedColumn.order='asc'
       }
   this.setState({sortedColumn})

   }
  render() {
    return (
      <main className="container">
      <h1>Movie APP</h1>
      <Movie  movies={this.state.movies} onDelete={this.handleDelete} onLiked={this.handleLiked}
      itemCount={this.state.movies.length}
      pageSize={this.state.pageSize}
      currentPage={this.state.currentPage}
      onPageChange={this.handlePageChange}
      genres={this.state.genre}
      selectedGenre={this.state.selectedGenre}
      onSelectedItem={this.handleOnSelectedItem}
      onSort={this.handleSort}
      sortedColumn={this.state.sortedColumn}
      
      />
    </main>
    )
  }
}
export default App


