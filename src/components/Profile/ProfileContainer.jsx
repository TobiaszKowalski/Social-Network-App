import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../state/reducers/profile-reducer';
import { withRouter } from "react-router";
import { Redirect } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        if(this.props.isAuth === false) {return <Redirect to={'/login'} />};
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainer);