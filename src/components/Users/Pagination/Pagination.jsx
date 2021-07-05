import React from 'react';
import style from '../Users.module.css';

let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.slice(0, 10).map((p, index) => {
                return <span 
                        key={index} 
                        className={`${props.currentPage === p && style.selectedPage} ${style.pageNumbers}`} 
                        onClick={(e) => {props.onPageChanged(p)}}
                        >
                        {p}
                        </span>
            })}
        </div>      
    )
}

export default Pagination;