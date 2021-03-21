import React from 'react';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../state/reducers/profile-reducer';
import { withRouter } from "react-router";
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileThunkCreator})
)(ProfileContainer);