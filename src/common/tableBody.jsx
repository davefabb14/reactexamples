import React, { Component } from 'react'
import _ from 'lodash';

 
 
 export default class tableBody extends Component {

    getData=(row ,col)=>{

        if(col.content) return col.content(row)
        return _.get(row,col.path)

    }
     render() {
        const {rows,columns}= this.props
         return (
            <tbody>
            {
   rows.map((row)=>{
  return  <tr key={row._id}>{
     columns.map((col)=>{
        return  <td key={col.path || col.key}> {this.getData(row,col)} </td>

    })
    }
      

  </tr>
       

   })


            }

        </tbody>
         )
     }
 }
 

