import React from "react";
import Input from '../common/input'
import Select from '../common/select'
import From from '../common/form'
import  { getGenres } from '../services/fakeGenreService'
import {getMovie,saveMovie} from '../services/fakeMovieService'

class MovieFrom extends From {
  constructor(props) {
    super(props);
    this.state = {
      data: { title: "", genreId: "", stock: "", rate: "" },
      errors:{},
      genres:[]

    };
  }
  componentDidMount(){
  const genres=getGenres()  ;
  console.log(genres)
  this.setState({genres})

   const movieId=this.props.match.params.id
   if(movieId==="new") return ;
   const movie= getMovie(movieId)
   if(!movie)  return this.props.history.replace("/not-found");
   this.setState({data:this.mapDataView(movie)})


  }
  mapDataView=(movie)=>{
    return {
      id:movie._id,
      title:movie.title,
      genreId:movie.genre._id,
      stock:movie.numberInStock,
      rate:movie.dailyRentalRate
    }


  }
  handleChange=({currentTarget})=>{
     const data={...this.state.data};
      const errors={...this.state.errrors}
     data[currentTarget.name]= currentTarget.value
     if(data[currentTarget.name]==='') errors[currentTarget.name]= currentTarget.name+ " is empty"
     
     this.setState({data,errors})


  }
  
  validate=()=>{
    const  {title,genreId,stock ,rate}=this.state.data;
     const errors={}
    if(title==='') errors.title="Title is empty"
    
    if(genreId==='') errors.genreId="Genre is not selected"
    if(stock==='') errors.stock="stock is empty"
    if(rate==='') errors.rate="rate is empty"
    return errors;
}
doSubmit=()=>{
const data={...this.state.data}
  const saveData={title:data.title,genreId:data.genreId, numberInStock:data.stock, dailyRentalRate:data.rate}
  
  saveMovie(saveData)
  
  this.props.history.push("/movies")
  console.log("do sun")

}

  render() {
    const { genres } = this.props;
    

    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
        label="Title"
        name="title"
        value={this.state.data.title}
        onChange={this.handleChange}
        errors={this.state.errors.title}
       />
        
        <Select
        label="Genre"
        name="genreId"
        value={this.state.data.genreId}
        onChange={this.handleChange}
        allGenre={this.state.genres}
        error={this.state.errors.genreId}
        />
        <Input 
        label="Stock"
        name="stock"
        value={this.state.data.stock}
        onChange={this.handleChange}
        errors={this.state.errors.stock}
       />
         <Input 
         label="Rate"
        name="rate"
        value={this.state.data.rate}
        onChange={this.handleChange}
        errors={this.state.errors.rate}
       />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default MovieFrom;
