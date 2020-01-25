import React from 'react'

const Select=({label,name,value,onChange,allGenre ,error}) =>{
   
    return (
       <div className="form-group">
<label htmlFor="genre">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          id={name}
        >
          {allGenre.map(genre => (
            <option key={genre._id} value={genre._id}>{genre.name}</option>
          ))}
        </select>
        { error &&  <div className="alert alert-danger">{error}</div>}
      </div>
    )
}
export default Select
