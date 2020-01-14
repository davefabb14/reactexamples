import React from 'react'

const ListGroup=( props)=> {
    const {genres , textProperty, valueProperty, selectedGenre ,onSelectedItem}=props
    return (
        <ul className="list-group">
            {genres.map((genre)=>{
            return <li  key={genre[valueProperty]} className={selectedGenre===genre?  "list-group-item active" :"list-group-item"} onClick={()=>{onSelectedItem(genre)}}> {genre[textProperty]} </li>
            })

            }

        </ul>

    );


};
ListGroup.defaultProps={
    textProperty:"name",
    valueProperty:"_id"
}


export default ListGroup;