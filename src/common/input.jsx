import React from 'react'

const Input=({ label ,name,onChange,value,errors})=> {
    return (
       
        <div className="form-group">
<label htmlFor="title">{label}</label>
        <input 
        name={name}
        onChange={onChange}
        value={value}
        type="text" 
        className="form-control" 
        id={name}
         />
       { errors &&  <div className="alert alert-danger">{errors}</div>}
      </div>
         
    )
}

export default Input