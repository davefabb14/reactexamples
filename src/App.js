import React, { Component } from "react";
import {Route,Redirect ,Switch} from 'react-router-dom';
import Movie from "./component/Movie";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import  Customers from './component/customers';
import  Rentals from './component/rentals';
import  MovieForm from './component/movieform';
import NotFound  from './component/notfound'
import NavBar from './component/navbar'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genre: [],
      selectedGenre: null,
      pageSize: 4,
      currentPage: 1,
      sortedColumn: { path: "title", order: "asc" }
    };
  }
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genre: [{ _id: "", name: "All Genre" }, ...getGenres()]
    });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => {
      return movie._id !== m._id;
    });
    this.setState({ movies });
  };
  handleLiked = movie => {
    // console.log(movie)

    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleOnSelectedItem = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = sortedColumn=> {
    
    this.setState({ sortedColumn });
  };
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className="container">
        <Switch>
          <Route path="/movies/:id"  component={MovieForm}/>
        <Route path="/movies" render={props=><Movie
          movies={this.state.movies}
          onDelete={this.handleDelete}
          onLiked={this.handleLiked}
          itemCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
          genres={this.state.genre}
          selectedGenre={this.state.selectedGenre}
          onSelectedItem={this.handleOnSelectedItem}
          onSort={this.handleSort}
          sortedColumn={this.state.sortedColumn}
        /> }></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/"  exact to="/movies" ></Redirect>
        <Redirect to="/not-found"></Redirect>


        </Switch>


        
      </main>

      </React.Fragment>
    );
  }
}
export default App;
