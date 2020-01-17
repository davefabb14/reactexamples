 import React, { Component } from 'react'

 class TableHeader extends Component {
     
     raiseSort=(path)=>{
   const {onSort}=this.props
   
        const sortedColumn = { ...this.props.sortedColumn };
        if (sortedColumn.path === path) {
          sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
        } else {
          sortedColumn.path = path;
          sortedColumn.order = "asc";
        }
        onSort(sortedColumn)

     }
     renderSortIcon=(column)=>{
        
         if( column.path !== this.props.sortedColumn.path || column.path===undefined) return null;
         if(this.props.sortedColumn.order==='asc' ) return <i className="fa fa-sort-asc"></i>
         else return <i className="fa fa-sort-desc"></i>
 
         
     }

    render() {
       const  {data}= this.props
        return (
        <thead>
            <tr>
                {
                    data.map((item)=>{
                        return <th key={item.path || item.key} onClick={()=>{ this.raiseSort(item.path)}}> {item.label }
                        {this.renderSortIcon(item)}
                        </th>
                    })
                
    }

            </tr>

        </thead>

            
        )
    }
}
export default  TableHeader;
