import MyPosts from "./MyPosts";
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../state/reducers/profile-reducer';
import { connect } from 'react-redux';

//Контейнер до коннекта
/*const MyPostsContainer = (props) => {
    let state = props.state;


    let addPost = () => {
        let action = addPostActionCreater()
        props.store.dispatch(action);
    };
    
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    };
    return (
        <MyPosts 
            updateNewPostText = {onPostChange} 
            addPost = {addPost} 
            postData = {state.profileReducer.postData} 
            newPostText = {state.profileReducer.newPostText} 
        />
    )
}
*/

const mapStateToProps = (state) => {
    return {
        postData: state.profileReducer.postData,
        newPostText: state.profileReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreater()
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;