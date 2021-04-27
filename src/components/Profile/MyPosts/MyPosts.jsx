import React from 'react';
import style from '../MyPosts/MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { Textarea } from '../../common/FormControls/FormsControl.js';


const MyPosts = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    let postsElements = props.postData.map(el => <Post message={el.message} likesCount = {el.likesCount} />)

    const maxLength10 = maxLengthCreator(10);

    const AddNewPost = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field 
                        component = {Textarea} 
                        name = 'newPostText' 
                        placeholder = 'Enter your post' 
                        validate = {[required, maxLength10]}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }

    const NewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPost);

    return (
        <div className ={style.postsBlock}>
            <h3>My posts</h3>
            <NewPostReduxForm onSubmit={onAddPost} />
            <div className ={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;