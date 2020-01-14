import React, { Component } from 'react'
import MovieTable from './MovieTable'
import  {Paginate}  from '../utils/paginate'
import ListGroup from '../common/ListGroup'

 class Movie extends Component {
     
     
    render() {
        const {movies,currentPage,pageSize, selectedGenre,onPageChange ,onLiked,onDelete,onSort}=this.props
    const filtered= selectedGenre && selectedGenre._id ? movies.filter((movie)=>{
          return  selectedGenre._id=== movie.genre._id
    }) : movies
    
    const paginMovie=  Paginate(filtered, currentPage,pageSize)
      console.log(filtered.length)
        let displayMessage;
        if(paginMovie.length===0) displayMessage="There are no movie in the database."
         else{
             displayMessage="showing " +paginMovie.length + "  Movies in the database"
         }
        return (
            
    
        <div className="row">
            <div className="col-3">
            <ListGroup  genres={this.props.genres} 
            selectedGenre={this.props.selectedGenre}
            onSelectedItem={this.props.onSelectedItem} 
            />
            </div>
            <div className="col">
                <h2>{displayMessage}</h2>

            <MovieTable movies={paginMovie} onDelete={onDelete} onLiked={onLiked}
            
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onSort={onSort}
            
            />

            </div>

        </div>
            
                
            
        )
    }
}
export default Movie;
