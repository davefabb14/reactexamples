import React, { Component } from 'react'
import MovieTable from './MovieTable'

 class Movie extends Component {
     
     
    render() {
        let displayMessage;
        if(this.props.movies.length===0) displayMessage="There are no movie in the database."
         else{
             displayMessage="showing " +this.props.movies.length + "  Movies in the database"
         }
        return (
            <div>
    <h2>{displayMessage}</h2>
            <MovieTable movies={this.props.movies} onDelete={this.props.onDelete} onLiked={this.props.onLiked}/>
                
            </div>
        )
    }
}
export default Movie;
