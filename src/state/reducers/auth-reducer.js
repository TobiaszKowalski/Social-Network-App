import { authAPI } from '../../API/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ON_AUTH_USER = 'ON_AUTH_USER';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
            return {...state, ...action.payload} 
        case ON_AUTH_USER: 
            return {...state, isAuth: true} 
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}        
        default:
            return state;
    }
}

export const setAuthUserDataAC = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, 
    payload: {id, email, login, isAuth}
})
export const setAuthFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setAuthLoginAC = () => ({type: ON_AUTH_USER})

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        dispatch(setAuthFetchingAC(true));
        return authAPI.onAuth().then(response=>{
            dispatch(setAuthFetchingAC(false))
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
    }
}
export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        return authAPI.login(email, password, rememberMe).then(response=>{
            if (response.data.resultCode === 0) {
                dispatch(getAuthThunkCreator());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(response=>{
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        })
    }
}

export default authReducer;