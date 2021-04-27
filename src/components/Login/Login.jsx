import React from 'react';
import LoginReduxForm from './LoginForm/LoginForm';
import { loginThunkCreator } from '../../state/reducers/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) { return <Redirect to = {'profile'} /> }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunkCreator})(Login);