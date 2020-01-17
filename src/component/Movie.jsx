import React, { Component } from "react";
import MovieTable from "./MovieTable";
import { Paginate } from "../utils/paginate";
import ListGroup from "../common/ListGroup";
import _ from 'lodash';

class Movie extends Component {
    getData=()=>{
        const {
            movies,
            currentPage,
            pageSize,
            selectedGenre,
          
            sortedColumn
          } = this.props;
        const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(movie => {
            return selectedGenre._id === movie.genre._id;
          })
        : movies;
        const sorted= _.orderBy(filtered ,[sortedColumn.path], sortedColumn.order )

    const paginMovie = Paginate(sorted, currentPage, pageSize);
    return {filtered, paginMovie}
    }
  render() {
    const {
     
      currentPage,
      pageSize,
    
      onPageChange,
      onLiked,
      onDelete,
      onSort,
      sortedColumn
      
    } = this.props;

    const {filtered, paginMovie}=this.getData();
    
    let displayMessage;
    if (paginMovie.length === 0)
      displayMessage = "There are no movie in the database.";
    else {
      displayMessage =
        "showing " + paginMovie.length + "  Movies in the database";
    }
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={this.props.genres}
            selectedGenre={this.props.selectedGenre}
            onSelectedItem={this.props.onSelectedItem}
          />
        </div>
        <div className="col">
          <h2>{displayMessage}</h2>

          <MovieTable
            movies={paginMovie}
            onDelete={onDelete}
            onLiked={onLiked}
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onSort={onSort}
            sortedColumn={sortedColumn}

          />
        </div>
      </div>
    );
  }
}
export default Movie;
