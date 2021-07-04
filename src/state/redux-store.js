import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './reducers/profile-reducer';
import dialogReducer  from './reducers/dialog-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

export default store;