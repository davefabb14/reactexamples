import React from 'react'

 function MovieTable(props) {
    return (
        <table className="table m-5">
            <thead>
                <tr>
                    <th> Title</th>
                    <th> Genre</th>
                    <th> Stock</th>
                    <th> Rate</th>
                    <th> </th>
                </tr>

            </thead>
            <tbody>
              {
                  props.movies.map((movie)=>{
                      return (
                      <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td> <button className="btn btn-danger btn-sm m-2">Delete</button></td>
                  


                      </tr>
                      );

                  })
              }  

            </tbody>

            
        </table>
    )
}

export default MovieTable