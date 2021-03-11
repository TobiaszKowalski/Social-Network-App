import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserDataAC, setAuthFetchingAC } from '../../state/reducers/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response=>{
            this.props.setAuthFetchingAC(false)
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserDataAC(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }

}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserDataAC, setAuthFetchingAC})(HeaderContainer);