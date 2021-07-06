import React from 'react';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhotoThunkCreator } from '../../state/reducers/profile-reducer';
import { withRouter } from "react-router";
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            /*
            if (!userId) {
                this.props.history.push('/login');
            }
            */
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile 
            {...this.props}
            isOwner={!this.props.match.params.userId} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatusThunkCreator}
            savePhoto={this.props.savePhotoThunkCreator} 
        />
    }
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhotoThunkCreator})
)(ProfileContainer);