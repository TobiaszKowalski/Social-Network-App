import { profileAPI } from '../../API/api';

const ADD_POST = 'profileReducer/ADD-POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const DELETE_POST = 'profileReducer/DELETE_POST';
const SET_PHOTO = 'profileReducer/SET_PHOTO';

const initialState = {
    postData: [
        { id: '1', message: 'Hi', likesCount: 0 },
        { id: '2', message: 'Whats up?', likesCount: 0 },
        { id: '3', message: '=)', likesCount: 0 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
}

export const addPostActionCreater = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatusAC = (status) => ({ type: SET_STATUS, status })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const setPhotoAC = (photos) => ({ type: SET_PHOTO, photos })


export const getProfileThunkCreator = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfileUsers(userId);
    dispatch(setUserProfileAC(response.data));
};
export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response.data));
};
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    };
};
export const savePhotoThunkCreator = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    dispatch(setPhotoAC(response.data.data.photos));
};

export default profileReducer;