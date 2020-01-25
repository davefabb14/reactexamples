import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Like from '../common/Like'
import Pagination from '../common/Pagination'
import  TableHeader from '../common/tableHeader'
import TableBody from '../common/tableBody'
   
    
 class MovieTable extends Component {
    columns=[{path:'title' ,label:'Title',content:movie=><Link   movie to={`/movie/${movie._id}`}> {movie.title}</Link>},
   
    {path:'genre.name' ,label:'Genre'},
    {path:'numberInStock' ,label:'Stock'},
    {path:'dailyRentalRate' ,label:'Rate'},
    {key:'liked' ,content:movie =><Like liked={movie.liked} movie={movie} onLiked={this.props.onLiked}/>},
    {key:'delete', content: movie=> <button onClick={()=>{ this.props.onDelete(movie)}} className="btn btn-danger btn-sm m-2">Delete</button>}

   ]
       render() {
        const {movies ,itemCount,currentPage ,pageSize,onPageChange ,onSort,sortedColumn}=this.props
           return (
              
            <React.Fragment>
        <table className="table m-5">
            <TableHeader  data={this.columns} sortedColumn={sortedColumn} onSort={onSort }/>
            <TableBody rows={movies } columns={this.columns} />
            
            
        {/* <tbody>


            say hi
              {
                  movies.map((movie)=>{
                      return (
                      <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td><Like liked={movie.liked} movie={movie} onLiked={onLiked}/></td>
                  <td> <button onClick={()=>{ onDelete(movie)}} className="btn btn-danger btn-sm m-2">Delete</button></td>
                  


                      </tr>
                      );

                      
                  })
              }  

            </tbody> */}
            

            
        </table>
        
      <Pagination itemCount={itemCount} pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={onPageChange}/> 

        </React.Fragment>
           )
       }
   }
   
 

export default MovieTable