import React from 'react';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../state/reducers/profile-reducer';
import { withRouter } from "react-router";
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 15663}
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} />
    }
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator})
)(ProfileContainer);