import React, { Component } from 'react'
import MovieTable from './MovieTable'
import  {Paginate}  from '../utils/paginate'

 class Movie extends Component {
     
     
    render() {
        const {movies,currentPage,pageSize}=this.props
    const paginMovie= Paginate(movies, currentPage,pageSize)
        let displayMessage;
        if(paginMovie.length===0) displayMessage="There are no movie in the database."
         else{
             displayMessage="showing " +paginMovie.length + "  Movies in the database"
         }
        return (
            <div>
    <h2>{displayMessage}</h2>
            <MovieTable movies={paginMovie} onDelete={this.props.onDelete} onLiked={this.props.onLiked}
            
            itemCount={this.props.itemCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.props.onPageChange}
            />
                
            </div>
        )
    }
}
export default Movie;
