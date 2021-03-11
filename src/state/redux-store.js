import { createStore, combineReducers } from 'redux';
import profileReducer from './reducers/profile-reducer';
import dialogReducer  from './reducers/dialog-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer,
    auth: authReducer
})


let store = createStore(reducers)

export default store;