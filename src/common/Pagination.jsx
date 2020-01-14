import React from 'react';
import PropType from 'prop-types';
import _ from 'lodash';

 function Pagination(props) {
     
     const { itemCount, pageSize,currentPage,onPageChange}=props;
     const pageCount= Math.ceil(itemCount/pageSize);
     if(pageCount===1) return null;

   const pages=  _.range(1,pageCount+1);
    return (
        <nav >
            <ul className="pagination">
                {
                    pages.map((page)=>{

                    return <li key={page} className={currentPage===page ?"page-item active":"page-item"}><a onClick ={()=>{ onPageChange(page)}}className="page-link"> {page}</a></li>
                    })
                
 }

            </ul>

        </nav>

    );
 
}
 Pagination.propTypes={
     itemCount:PropType.number.isRequired,
     pageSize:PropType.number.isRequired,
     currentPage:PropType.number.isRequired,
     onPageChange:PropType.func.isRequired,
 };
export default Pagination;

