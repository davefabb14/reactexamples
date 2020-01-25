import React from 'react'

 function MovieForm1({match,history}) {
    return (
        <div>
           <h1> Movie Form {match.params.id} </h1> 
           <button className="btn btn-primary btn-sm" onClick={() => history.push("/movies") }>Save</button>
        </div>
    )
}
export default  MovieForm1;
