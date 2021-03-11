const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postData: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'Whats up?', likesCount: 0},
        {id: '3', message: '=)', likesCount: 0}
    ],
    newPostText: 'Some text',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreater = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
)

export default profileReducer;