const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
            return {...state, ...action.data, isAuth: true} 
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}        
        default:
            return state;
    }
}

export const setAuthUserDataAC = (id, email, login) => ({
    type: SET_USER_DATA, 
    data: {id, email, login}
})
export const setAuthFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default authReducer;