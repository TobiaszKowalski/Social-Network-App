import React, { useState } from 'react';
import style from './Pagination.module.css';

let Pagination = (props) => {

    let {totalItemsCount, pageSize, currentPage, onPageChanged, sizePerPage = 10} = props;
    //pageSize - количество item на странице
    let totalPagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    //Количество страниц(пагинация), видимых на странице
    let pagesCount = Math.ceil(totalPagesCount / sizePerPage);
    let [pagesCountNumber, setPagesCountNumber] = useState(1);
    let leftPagesCountBorder = (pagesCountNumber - 1) * (sizePerPage + 1);
    let rightPagesCountBorder = pagesCountNumber * sizePerPage;

    return (
        <div className={style.pagination}>
            {pagesCountNumber > 1 && <button onClick={()=>{setPagesCountNumber(pagesCountNumber - 1)}}>Prev</button>}
                {pages.filter(p => p >= leftPagesCountBorder && p <= rightPagesCountBorder).map((p, index) => {
                    return <span 
                            key={index} 
                            className={`${currentPage === p && style.selectedPage} ${style.pageNumbers}`} 
                            onClick={(e) => {onPageChanged(p)}}
                            >
                            {p}
                            </span>
                })}
            {pagesCount > pagesCountNumber && <button onClick={()=>{setPagesCountNumber(pagesCountNumber + 1)}}>Next</button>}
        </div>      
    )
}

export default Pagination;