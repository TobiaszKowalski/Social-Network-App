import React from 'react';
import LoginReduxForm from './LoginForm/LoginForm';
import { getAuthLoginThunkCreator } from '../../state/reducers/auth-reducer';


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        getAuthLoginThunkCreator(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;