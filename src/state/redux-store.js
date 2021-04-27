import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './reducers/profile-reducer';
import dialogReducer  from './reducers/dialog-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer,
    auth: authReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

export default store;