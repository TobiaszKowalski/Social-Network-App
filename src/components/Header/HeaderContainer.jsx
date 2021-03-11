import React from 'react';
import Header from './Header';
import { usersAPI } from '../../API/api';
import { connect } from 'react-redux';
import { setAuthUserDataAC, setAuthFetchingAC } from '../../state/reducers/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthFetchingAC(true)
        usersAPI.onAuth().then(data=>{
            this.props.setAuthFetchingAC(false)
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
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