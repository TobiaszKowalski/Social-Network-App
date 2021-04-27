import MyPosts from "./MyPosts";
import { addPostActionCreater } from '../../../state/reducers/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        postData: state.profileReducer.postData,
        newPostText: state.profileReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreater(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;