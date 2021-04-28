import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormControls/FormsControl';
import { required } from '../../../utils/validators/validators';
import style from '../../common/FormControls/FormControls.module.css';


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                { props.error && <div className={style.formSummaryError}>{props.error}</div>}
                <div>
                    <Field placeholder={'Login'} name={'email'}
                    type={'email'}
                    validate = {[required]}
                    component={Input} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                    type={'password'} 
                    validate = {[required]}
                    component={Input} />
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;