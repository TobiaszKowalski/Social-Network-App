import { getAuthThunkCreator } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true
            }       
        default:
            return state;
    }
}

export const setInitialisingAC = () => ({type: INITIALIZED_SUCCESS})

export const initializeAppTC = () => (dispatch) => {
    let promise = dispatch(getAuthThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialisingAC());
        })
}


export default appReducer;