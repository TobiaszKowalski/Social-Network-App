import React from 'react';
import style from '../MyPosts/MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let postsElements = props.postData.map(el => <Post message={el.message} likesCount = {el.likesCount} />)

    let newPostElement = React.createRef();

    return (
        <div className ={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className ={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;