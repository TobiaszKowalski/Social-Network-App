import React from 'react';
import style from '../Post/Post.module.css';

const Post = (props) => {
    let likesCount = props.likesCount;
    return (
        <div className ={style.item}>
            <img src = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt='' />
                <p>{props.message}</p>
            <div>
                <span>Like</span> {likesCount}
            </div>
        </div>
    )
}

export default Post