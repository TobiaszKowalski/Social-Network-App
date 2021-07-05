import { profileAPI } from '../../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    postData: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'Whats up?', likesCount: 0},
        {id: '3', message: '=)', likesCount: 0}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case DELETE_POST: 
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.id),
            };
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPostActionCreater = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})


export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileUsers(userId).then(response=>{
            dispatch(setUserProfileAC(response.data));
        })
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response=>{
            dispatch(setStatusAC(response.data));
        })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response=>{
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
    }
}

export default profileReducer;